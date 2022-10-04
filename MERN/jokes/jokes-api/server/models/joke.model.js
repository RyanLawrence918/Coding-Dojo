const mongoose = require('mongoose'); //import mongoose so we can create table using js code

const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be 2 characters long"]
    },
    setup: {
        type: String,
        required: [true, "Setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"]
    }
}, {timestamps:true});

//this line registers the table under the table name "Joke" using the instructions from the JokeSchema variable
const Joke = mongoose.model("Joke", JokeSchema)

//export this table so that other files (controllers mainly) can use it
module.exports = Joke; 