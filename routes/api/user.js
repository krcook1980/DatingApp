const router = require("express").Router();
const userController = require("../../controllers/controller");


router.route('/')
    .put(userController.update)

// router.route('/block')    
//     .put(userController.block)

router.route("/findMatches")
    .post(userController.findMatches)

router.route('/:id')
    .get(userController.getUser)

router.route('/updateUser')    
    .put(userController.updateUser)

router.route('/createUser') 
    .post(userController.createUser)

 router.route('/blockUser')
    .put(userController.blockUser)   

module.exports = router;