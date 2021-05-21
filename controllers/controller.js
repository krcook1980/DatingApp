const db = require("../models");
const User = require("../models/user");

module.exports = {



    findMatch: function (req, res) {


        // write code to get current USERS information, so we can then set that to the search value in the query. .then and nested in ANOTHER .then second database call        
        db.User
            .findById({ _id: req.body.id })
            .then(user => {
                console.log("preferences: ", user.data.looking, Object.values(user.data.surveyInfo));
                const lookingFor = user.data.looking
                const matchInfo = Object.values(user.data.surveyInfo)

            })
            .then(dbUser)
            .aggregate([
                { $match: { $text: { $search: matchInfo } } },
                { $match: { looking: lookingFor } },
                { $project: { score: { $meta: 'textScore' }, username: 1 } },
                { $sort: { score: -1 } }, { $limit: 5 }
            ])
            .then(dbUser => res.json(dbUser))

            .catch(err => res.status(422).json(err));
    },

    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },


};

