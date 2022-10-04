const mongoose = require('mongoose'); //import mongoose so we can create table using js code

//title, price, description

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be more than 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description is required"]
    }
}, {timestamps:true});

//this line registers the table under the table name "Joke" using the instructions from the JokeSchema variable
const Product = mongoose.model("Product", ProductSchema)

//export this table so that other files (controllers mainly) can use it
module.exports = Product; 