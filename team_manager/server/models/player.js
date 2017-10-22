const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
	player: String,
    position: String,
    game1: { type: Number, default: 3 },
    game2: { type: Number, default: 3 },
    game3: { type: Number, default: 3 },
}, {timestamps: true})

mongoose.model("Player", PlayerSchema)