// require express
const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser")
// path module -- try to figure out where and why we use this
const path = require("path");
// create the express app
const app = express();
const PORT = 8000

app.use(session({secret: 'codingdojorocks'}))
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (req.session.card == "success") {
        button = "Play again"
    }
    
    if (req.session.new_game == true || !req.session) {
        req.session.random = {}
        req.session.message = ""
    }
    if (!req.session.random || !req.session.message) {
    // if (!req.session) {
        req.session.random = Math.floor(Math.random() * 100) + 1
        req.session.message = ""
        req.session.guess = -1
        req.session.new_game = false
        req.session.hide = "hidden"
        console.log (req.session);
    }
    if (req.session.new_game == false) {
        button = "Submit"

    }
    res.render("index", {data: req.session, button: button})
})

app.post('/guess', function(req, res) {
    req.session.guess = req.body.guess
    req.session.hide = ""
    console.log("the current guess is", req.session.guess);
    if (req.session.guess > req.session.random) {
        req.session.message = "Too high! Guess again"
        console.log(req.session.message, req.session.hide)
    } else if (req.session.guess < req.session.random) {
        req.session.message = "Too low! Guess again"
        req.session.card = "danger"
        console.log(req.session.message, req.session.hide)
        
    } else {
        req.session.message = "Correct!"
        req.session.card = "success"
        // req.session.new_game = true
        console.log(req.session.message, req.session.hide)
    }
    res.redirect('/')
})

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})