const db = require("../models");
const bcrypt = require('bcryptjs')

module.exports = {

    findMatches: function (req, res) {
        db.User
            .aggregate([
                { $match: { gender: req.body.looking } },
                { $match: { looking: req.body.gender } },
                { $limit: 5 }
            ])
            .then(returned => {
                const filtered = returned.filter(user => !req.body.myConnections.map(connection => connection.name).includes(user.username))
                
                res.json(filtered)
            })
            .catch(err => res.status(422).json(err));
    },

    createUser: function (req, res) {

        db.User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err
            if (doc) res.send("User already exists")
            if (!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = await req.body
                newUser.password = hashedPassword;
                db.User.create(req.body)
                    .then(dbModel => res.json(dbModel))

                    .catch(err => res.status(422).json(err));
            }
        })
    },

    update: function (req, res) {
        const data = req.body.type
        console.log(data, " in controller")
        db.User.findOneAndUpdate(
            { _id: req.body.user },
            { $push: { myConnections: { id: req.body.matchId, name: req.body.matchName } } })
            .then(saved => res.json({ id: req.body.matchId, name: req.body.matchName }))
            .catch(err => res.status(422).json(err))
    },

    updateUser: function(req, res){
        db.User.UpdateOne(
            {_id: req.body._id},
            {$set: req.body}
        )
        .then(result => res.json(result))
    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },


    // blockUser: function (req, res) {
    //     db.User.find()
    //         .then(users => {
    //             const filteredUsers = users.filter(user => !user.blockedUser.includes(req.user._id))
    //             res.json(filteredUsers)
    //         })
    // },


    getUser: function (req, res) {
        console.log("I'm in controller get ", req.params.id)
        db.User.findById({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err))
    },

    getBlocked: function (req, res) {
        db.User.find(req.params.id)
            .then(users => {
                const filteredUsers = users.filter(user => !user.blockedUser.includes(req.user._id))
                res.json(filteredUsers)
            }
            )
    },

};

    // This is the code for the desired logic for the application. Will be coming back to work on this properly.

    // findMatches: function (req, res) {

    //     const matchInfo = user.surveyInfo;
    //     const survey = matchInfo
    //     const looking = JSON.stringify(user.looking)
    //     console.log("this is looking: ", looking)
    //     console.log("this is matchInfo: ", survey)

    //     db.User.aggregate

    //         ([
    //             { $match: { $text: { $search: survey } } },
    //             { $match: { gender: looking } },
    //             { $project: { username: 1 } },
    //             { $sort: -1 }, { $limit: 5 }
    //         ])
    //         .then(returned => {
    //             res.json(returned)
    //             console.log(returned)

    //         })
    //         .catch(err => res.status(422).json(err))
    // },