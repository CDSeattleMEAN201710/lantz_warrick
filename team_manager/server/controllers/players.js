const mongoose = require("mongoose")
const Player = mongoose.model("Player")

module.exports = {
    add: (req, res) => {
        let new_player = new Player(req.body)
        
        new_player.save()
            .then(() => {
                res.json(true)
            })
            .catch(err => {
                console.log("Player save error", err)
                res.status(500).json(err)
            })
    }
}