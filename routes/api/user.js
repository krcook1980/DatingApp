const router = require("express").Router();
const userController = require("../../controllers/controller");


router.route('/')
    .post(userController.createUser)
    .put(userController.update)

router.route('/block')    
    .put(userController.block)

router.route("/findMatches")
    .post(userController.findMatches)

router.route('/:id')
    // .get(userController.findMatches)


module.exports = router;