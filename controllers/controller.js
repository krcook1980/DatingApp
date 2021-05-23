const db = require("../models");
const bcrypt = require('bcryptjs')

module.exports = {


    findMatches: function (req, res) {

        db.User
            .find({ _id: req.params.id })
            .then(user => {
                const matchInfo = (user[0].surveyInfo);
                const survey = Object.values(matchInfo)
                const looking = JSON.stringify(user[0].looking)
                console.log("this is looking: ", looking)
                console.log("this is matchInfo: ", survey)

                // db.User.aggregate
                //     ([
                //         // { $match: { $text: { $search: matchInfo } } },
                //         { $match: { gender: looking } },
                //         { $project: { score: { $meta: 'textScore' }, username: 1 } },
                //         { $sort: { score: -1 } }, { $limit: 5 }
                //     ])
                //     .then(returned => {
                //         const filteredUsers = returned.filter(user => !user.blockedUsers.includes(req.body.user))
                //         res.json(filteredUsers)
                //     })
                //     .catch(err => res.status(422).json(err))
            })


    },

    createUser: function (req, res) {

        db.User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err
            if (doc) res.send("User already exists")
            if (!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = req.body
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
            { $push: { myConnections: req.body.name } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },


    blockUser: function (req, res) {
        db.User.find()
            .then(users => {
                const filteredUsers = users.filter(user => !user.blockedUser.includes(req.user._id))
                res.json(filteredUsers)
            }
            )

    },




    getUser: function (req, res) {
        console.log("I'm in controller get ", req.params.id)
        // const userId = "60a2cdb0745bca35843bedb2"
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

