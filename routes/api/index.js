const router = require("express").Router();
const userRoutes = require("./user");

router.use("/", userRoutes)
router.use("/findMatches", userRoutes)
router.use("/createUser", userRoutes)
router.use("/saveContact", userRoutes)
router.use("/updateUser", userRoutes)
router.use("/getUser", userRoutes)
router.use('/blockUser', userRoutes)

module.exports = router;