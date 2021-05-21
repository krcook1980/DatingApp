
const User = require('./models')
const bcrypt = require("bcryptjs")
const LocalStrategy = require('passport-local').Strategy
const db = require("./models");

module.exports = function (passport) {

    passport.use(
        new LocalStrategy((username, password, done) => {
            db.User.findOne({ username: username }, function (err, user) {
                if (err) throw err;
                if (!user) {
                    return done(null, false, { message: 'Unknown User' });
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) => {
        db.User.findOne({_id: id}, (err, user) => {
            cb(err, user)
        })
    })

}