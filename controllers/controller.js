const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Post.find(req.query)
            .then()
            .catch()
    },
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then()
            .catch()
    },
    create: function (req, res) {
        db.Post.create(req.body)
            .then()
            .catch()
    },
    update: function (req, res) {
        db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then()
            .catch()
    },
    remove: function (req, res) {
        db.Post.findById({ _id: req.params.id })
            .then()
            .catch()
    }
}