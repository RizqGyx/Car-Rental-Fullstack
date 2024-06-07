const router = require("express").Router();
const { User } = require("../models");

const autentikasi = require("../middlewares/authenticate");
const Users = require("../controllers/userController");
const upload = require("../middlewares/uploader");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");
const validateRole = require("../middlewares/validateRoleRegister");
const validateInputLowerCase = require("../middlewares/validateInputLowerCase ");

router.get("/", autentikasi, checkRole("Admin", "Superadmin"), Users.findUsers);
router.get(
  "/:id",
  autentikasi,
  checkId(User),
  checkRole("Admin", "Superadmin"),
  Users.findUserById
);
router.patch(
  "/:id",
  autentikasi,
  checkId(User),
  validateRole,
  validateInputLowerCase,
  checkRole("Admin", "Superadmin"),
  upload.array("images"),
  Users.updateUser
);
router.delete(
  "/:id",
  autentikasi,
  checkId(User),
  checkRole("Admin", "Superadmin"),
  Users.deleteUser
);

module.exports = router;
