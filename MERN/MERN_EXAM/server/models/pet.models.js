const mongoose = require('mongoose'); //import mongoose so we can create table using js code

//name, type, description, 
//skills(optional) skill1, skill2, skill3

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be more than 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be more than 3 characters long"]
    },
    skill1: {
        type: String,

    },
    skill2: {
        type: String,

    },
    skill3: {
        type: String,

    }
}, {timestamps:true});

PetSchema.path('name').validate(async ( name ) => {
    const namevalid = await mongoose.models.Pet.countDocuments({ name })
    return !namevalid
}, "Name already exist")
}, "Name already exist")

//this line registers the table under the table name "Joke" using the instructions from the JokeSchema variable
const Pet = mongoose.model("Pet", PetSchema)

//export this table so that other files (controllers mainly) can use it
module.exports = Pet; 