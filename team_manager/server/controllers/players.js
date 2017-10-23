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
    delete: (req, res) => {
        let id = req.body.id
        console.log("id got to controller", id);
        Player.remove({ _id: id }, function (err, player) {
            if(err){
                console.log('Delete error in controller', err)
            } else {
                console.log('player deleted at controller')
                res.json(true)
            }
        })
            
    },
    status: (req, res) => {
        let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {game1: status}, function (err,player){
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
    }
}