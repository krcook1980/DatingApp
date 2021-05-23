const mongoose = require("mongoose");
require('mongoose-type-email');


const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
        default: "email@gmail.com",

    },

    age: {
        type: Number,
        default: 69,

    },

    firstName: {
        type: String,
        required: true,
        default: "John",

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

    looking: {
        type: String,
        required: true,
    },

    surveyInfo:
        [{
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
            }
        }],

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

    myConnections: Array,

    blockedUsers: Array,


});

user.index({ vacation: 'text', animals: 'text', flavor: 'text', activity: 'text', personality: 'text', family: 'text', priorities: 'text', entertainment: 'text', alcohol: 'text', religion: 'text' })


module.exports = mongoose.model("User", user)

