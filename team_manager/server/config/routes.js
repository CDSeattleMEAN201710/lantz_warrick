const path = require("path")

const players = require("./../controllers/players.js")


module.exports = app => {
    app.post('/addPlayer', players.add)
    app.get('/get_all', players.get_all)
    app.post('/delPlayer', players.delete)

	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}