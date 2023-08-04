const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postLoginUserSchema,
  patchMeSchema,
  postRegisterUserSchema,
  //   deleteUserSchema,
} = require("./_schema");
const addUser = require("./postUser");
const loginUser = require("./loginUser");
const patchUser = require("./editUser");
const showUser = require("./getUser");
const removeUser = require("./deleteUser");
// const listUser = require("./list_Users");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    httpValidator({ body: req.body }, postRegisterUserSchema);
    console.log("validatordan otti");
    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const postLogin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginUserSchema);

    const result = await loginUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);
    const result = await patchUser({
      id: req.user.id,
      ...req.body,
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await showUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// const getUsers = async (req, res, next) => {
//   try {
//     const data = await listUser(req.query);

//     res.status(200).json({
//       data: [data.results, data.page_info],
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const deleteUser = async (req, res, next) => {
  try {
    // httpValidator({ params: req.params }, deleteUserSchema);
    const result = await removeUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postRegister,
  postLogin,
  editUser,
  getUser,
  //   getUsers,
  deleteUser,
};
