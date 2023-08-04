const express = require("express");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
// const isSuper = require("../../shared/auth/isSuper");
const {
  postRegister,
  postLogin,
  editUser,
  getUser,
  deleteUser,
  //   getUsers,
} = require("./_controllers");

const router = express.Router();

router.post("/user", postRegister);
router.post("/user/login", postLogin);
// router.get("/user/:id", isLoggedIn, getAdmin);
router.get("/user", isLoggedIn, getUser);
router.patch("/user/me", isLoggedIn, editUser);
// router.patch("/user/:id", isLoggedIn, isSuper, editAdmin);
router.delete("/user", isLoggedIn, deleteUser);

module.exports = router;
