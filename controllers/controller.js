const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .then()
            .catch()
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then()
            .catch()
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then()
            .catch()
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then()
            .catch()
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then()
            .catch()
    }
}