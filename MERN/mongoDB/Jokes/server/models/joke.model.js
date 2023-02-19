const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup is required(Could a setup really be that short?)"]
    },
    punchline: {
        type: String,
        required: [true , "Punchline is required"],
        minlength: [3, "Punchline cant be that good if its a few letters.... right?"]
    }
},{ timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;