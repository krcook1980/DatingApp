const router = require("express").Router();
const userRoutes = require("./user");

router.use("/getUser", userRoutes)
router.use("/createUser", userRoutes)
router.use("/saveContact", userRoutes);
router.use("/getBlocked", userRoutes)
module.exports = router;