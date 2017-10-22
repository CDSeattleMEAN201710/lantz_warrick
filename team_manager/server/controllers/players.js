const mongoose = require("mongoose")
const Player = mongoose.model("Player")

module.exports = {
    add: (req, res) => {
        let new_player = new Player(req.body)
        console.log('new player in controller, prior to save', new_player);
        new_player.save()
            .then(() => {
                res.json(true)
            })
            .catch(err => {
                console.log("Player save error", err)
                res.status(500).json(err)
            })
    },
    get_all: (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => {
                console.log('Player find error', err)
                res.status(500).json(err)
            })
    },
    // delete: (req, res) => {
    //     let id = req.params.id
    //     console.log("id got to controller", id);
    //     Player.remove({ id:req.params._id })
    //         .then(() => {
    //             res.json(true)
    //         })
    //         .catch(err => {
    //             console.log('Player delete error', err)
    //             res.status(500).json(err)
    //         })
    // }
}