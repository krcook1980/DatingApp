const db = require("../models");

module.exports = {
    getContact: function( req, res) {
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

    // removeContact: function(req, res){
    //     db.User.findByIdAndUpdate
    // }
}