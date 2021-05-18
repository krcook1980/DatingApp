const router = require("express").Router();
const userRoutes = require("./user");
const contactRoutes = require('./contact')


router.use("/saveContact", userRoutes);
router.use("/haveContact", contactRoutes)
router.use("/getUser", userRoutes)
router.use("/createUser", userRoutes)

module.exports = router;