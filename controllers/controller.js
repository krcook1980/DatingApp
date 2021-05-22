const db = require("../models");

module.exports = {

    findMatch: function (req, res) {

        db.User

            .find(
                {
                    surveyInfo: {

                        $elemMatch: {

                            vacation: User.vacation,
                            animals: User.animals,
                            flavor: User.flavor,
                            activity: User.activity,
                            personality: User.personality,
                            family: User.family,
                            priorities: User.priorities,
                            entertainment: User.entertainment,
                            alcohol: User.alcohol,
                            religion: User.religion,
                            cooking: User.cooking,
                            fishing: User.fishing,
                            camping: User.camping,
                            reading: User.reading,
                            exercise: User.exercise,
                            gaming: User.gaming,
                            computer: User.computers,
                            techDrones: User.techDrones,
                            hiking: User.hiking,
                            biking: User.biking,
                            dadJokes: User.dadJokes

                        }
                    }
                }
            )
            .sort({ username: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createUser: function (req, res) {
        console.log
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        console.log(req.body, " in controller")
        db.User.findOneAndUpdate(
            {
                _id: req.body.userId
            },
            {
                $push: { blockedUsers: req.body.name }
            }
        )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getBlocked: function (req, res) {
        db.User.find(req.params.id)
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
            .then(user => res.json(user.myConnections))
            .catch(err => res.status(422).json(err))
    },

    getContact: function (req, res) {
        console.log("id ", req.body.userId)
        db.User.findById(

            {
                _id: req.body.userId
            },

        ).then(user => {
            console.log("returned from haveContact", user.data.myConnections)
            res.json(dbModel)
        })
            .catch(err => res.status(422).json(err));

    },



};

