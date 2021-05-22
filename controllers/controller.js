const db = require("../models");
const bcrypt = require('bcryptjs')

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

        db.User.findOne({username: req.body.username}, async (err, doc) => {
        if (err) throw err
        if (doc) res.send("User already exists")
        if (!doc){
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
            {
                _id: req.body.user
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
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
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
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err))
    }

};

