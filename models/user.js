const mongoose = require("mongoose");
require('mongoose-type-email');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        default: "email@gmail.com"
    },

    age: {
        type: Number,
        default: 69,
        unique: true
    },

    firstName: {
        type: String,
        required: true,
        default: "John"
    },

    lastName: {
        type: String,
        required: true,
        default: "Smith"
    },

    gender: {
        type: String,
        required: true,
    },

    vacation: {
        type: String,
    },

    animals: {
        type: String,
    },

    flavor: {
        type: String,
    },

    activity: {
        type: String,
    },










});

const User = mongoose.model("User", userSchema);

module.exports = User;