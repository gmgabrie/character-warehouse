const router = require("express").Router();

const userRoutes = require("./user-routes");
const characterRoutes = require("./character-routes");

router.use("/users", userRoutes);
router.use("/characters", characterRoutes);

module.exports = router;
