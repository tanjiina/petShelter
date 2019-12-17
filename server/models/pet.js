console.log("pet.js is running!!");
const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const petSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please include the name of the pet"],
        minlength: [3, "Pet Name must be atleast 3 characters"]
        // unique: [true, "Pet Name must be unique"]
    },
    type: {
        type: String,
        required: [true, "Please include the type of the pet"],
        minlength: [3, "Pet Type must be atleast 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please include a descrption of the pet"],
        minlength: [3, "Pet Description must be atleast 3 characters"]
    },
    likes: {
        type: Number,
        default: 0
    },
    skill1 : {type: String},
    skill2 : {type: String},
    skill3 : {type: String}
}, {timestamps: true});//.plugin(uniqueValidator);

mongoose.model("Pet", petSchema);
