const router = require("express").Router();
const userController = require("../../controllers/controller");


router.route('/')
    .post(userController.createUser)
    .put(userController.update)

router
    .route('/:id')
    .get(userController.getUser)

module.exports = router;