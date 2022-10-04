const mongoose = require('mongoose'); //import mongoose so we can create table using js code

//define properties of object

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
}, {timestamps:true});

//this line registers the table under the table name "Joke" using the instructions from the JokeSchema variable
const Author = mongoose.model("Author", AuthorSchema)

//export this table so that other files (controllers mainly) can use it
module.exports = Author; 