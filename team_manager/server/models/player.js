const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
	player: String,
    position: String,
    game1: Number,
    game2: Number,
    game3: Number
}, {timestamps: true})

mongoose.model("Player", PlayerSchema)