const express = require("express");
const router = express.Router();

const { validateBody, authenticate, checkSubscription } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.current);
router.post("/logout", authenticate, ctrl.logout);
router.patch("/", authenticate, validateBody(schemas.updateSchema), checkSubscription, ctrl.update);

module.exports = router;
