const db = require("../models");

module.exports = {
    getContact: function( req, res) {
             db.User.find(
            
                {
                    username: (req.body.name)
                }
             
        ).then(dbModel => {
            console.log("returned from haveContact", dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));

    },

    // removeContact: function(req, res){
    //     db.User.findByIdAndUpdate
    // }
}