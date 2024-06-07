const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const validateRole = require("../middlewares/validateRoleRegister");
const checkRole = require("../middlewares/checkRole");
const validateInputLowerCase = require("../middlewares/validateInputLowerCase ");

router.post(
  "/register/admin",
  Authenticate,
  checkRole("Superadmin", "Admin"),
  validateRole,
  validateInputLowerCase,
  Auth.register
);
router.post("/register/member", validateInputLowerCase, Auth.registerMember);
router.post("/login", validateInputLowerCase, Auth.login);
router.get(
  "/checktoken",
  validateInputLowerCase,
  Authenticate,
  Auth.authenticate
);

module.exports = router;
