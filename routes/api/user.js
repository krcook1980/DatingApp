const router = require("express").Router();
const userController = require("../../controllers/controller");


router.route('/')
    .get(userController.findMatch)
    .post(userController.createUser)
    .put(userController.update)

router
    .route('/:id')
    .delete(userController.remove);

module.exports = router;