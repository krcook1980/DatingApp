const router = require("express").Router();
const contactController = require("../../controllers/contact");


router.route('/')
    .get(contactController.getContact)


module.exports = router;