const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/message_board', {useMongoClient: true})

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    comment: {type: String, required: true},
}, {timestamps: true})

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true, minlength: 4},
    comments: [CommentSchema]  //using embedded document rather than schema assn.
}, {timestamps: true})

mongoose.model('Message', MessageSchema) //l. 29, 31 can be combined by including MessageSchema in the args
// mongoose.model('Comment', CommentSchema) //with embedded document, don't need to set up another collction/model
const Message = mongoose.model("Message")
// const Comment = mongoose.model('Comment')

app.get('/', function(req, res) {
    Message.find({}, (err, messages) => {
        if(err){
            console.log("You done messed up index, son!");
        } else {
            console.log("Sending messages to index")
            res.render('index', {messages})
        }
    })
})
app.post('/message', (req, res) => {
    let new_message = new Message({
        name: req.body.name,
        message: req.body.message
    })
    new_message.save((err)=>{
        if(err){
            console.log(err);
        } else {
            console.log('message saved');
            res.redirect('/')
        }
    })
})
app.post('/comment', (req, res)=> {
    // let new_comment = new Comment({  //not working because there is no Comment model
    //     name: req.body.name,
    //     comment: req.body.comment
    // })
    Message.findOne({_id: req.body.message_id}, (err, messages)=>{
        message.comments.push({
            name: req.body.name,
            comment: req.body.comment
        })
        message.save((err)=>{
            if(err){
                console.log('error saving comment');
            } else {
                console.log('comment saved');
                res.redirect('/')
            }
        })
    })
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})