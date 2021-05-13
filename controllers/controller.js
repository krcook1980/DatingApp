// Defining methods for the booksController

module.exports = {

    findMatch: function (req, res) {
        db.User
            .find(
                {
                    surveyInfo: {
                        $elemMatch: {
                            vacation: User1.vacation,
                            animals: User1.animals,
                            flavor: User1.flavor,
                            activity: User1.activity,
                            personality: User1.personality,
                            family: User1.family,
                            priorities: User1.priorities,
                            entertainment: User1.entertainment,
                            alcohol: User1.alcohol,
                            religion: User1.religion
                        }
                    }
                }
            )
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); git
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

