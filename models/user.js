const mongoose = require("mongoose");
require('mongoose-type-email');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    password: {
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

    surveyInfo: [{

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

        personality: {
            type: String,
        },

        family: {
            type: String,
        },

        priorities: {
            type: String,
        },

        entertainment: {
            type: String,
        },

        alcohol: {
            type: String,
        },

        religion: {
            type: String,
        },

        biking: {
            type: Boolean,
        },

        camping: {
            type: Boolean,
        },

        computers: {
            type: Boolean,
        },

        cooking: {
            type: Boolean,
        },

        dadJokes: {
            type: Boolean,
        },

        exercise: {
            type: Boolean,
        },

        fishing: {
            type: Boolean,
        },

        gaming: {
            type: Boolean,
        },

        hiking: {
            type: Boolean,
        },

        reading: {
            type: Boolean,
        },

        techDrones: {
            type: Boolean,
        },
    }],

});

const User = mongoose.model("User", userSchema);

module.exports = User;