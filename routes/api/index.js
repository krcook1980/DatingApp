const router = require("express").Router();
const userRoutes = require("./user");
const contactRoutes = require('./contact')


router.use("/saveContact", userRoutes);
router.use("/haveContact", contactRoutes)

module.exports = router;