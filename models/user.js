const mongoose = require("mongoose");
require('mongoose-type-email');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        tags: { type: [String], index: true }
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        default: "email@gmail.com",
        tags: { type: [String], index: true }
    },

    age: {
        type: Number,
        default: 69,
        unique: true,
        tags: { type: [String], index: true }
    },

    firstName: {
        type: String,
        required: true,
        default: "John",
        tags: { type: [String], index: true }
    },

    lastName: {
        type: String,
        required: true,
        default: "Smith",
        tags: { type: [String], index: true }
    },

    gender: {
        type: String,
        required: true,
        tags: { type: [String], index: true }
    },

    surveyInfo: [{

        vacation: {
            type: String,
            tags: { type: [String], index: true }
        },

        animals: {
            type: String,
            tags: { type: [String], index: true }
        },

        flavor: {
            type: String,
            tags: { type: [String], index: true }
        },

        activity: {
            type: String,
            tags: { type: [String], index: true }
        },

        personality: {
            type: String,
            tags: { type: [String], index: true }
        },

        family: {
            type: String,
            tags: { type: [String], index: true }
        },

        priorities: {
            type: String,
            tags: { type: [String], index: true }
        },

        entertainment: {
            type: String,
            tags: { type: [String], index: true }
        },

        alcohol: {
            type: String,
            tags: { type: [String], index: true }
        },

        religion: {
            type: String,
            tags: { type: [String], index: true }
        },

        biking: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        camping: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        computers: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        cooking: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        dadJokes: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        exercise: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        fishing: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        gaming: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        hiking: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        reading: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },

        techDrones: {
            type: Boolean,
            tags: { type: [Boolean], index: true }
        },
    }],

    myConnections: [{}],
    blockedUsers: [{}],


});

userSchema.index({

})

const User = mongoose.model("User", userSchema);

module.exports = User;