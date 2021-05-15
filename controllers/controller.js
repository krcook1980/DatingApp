const db = require("../models");
const User = require("../models/user");

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
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

