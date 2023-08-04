const Joi = require("joi");

exports.postRegisterUserSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string(),
  }),
};

exports.postLoginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
// exports.getUsersSchema = {
//   query: Joi.object({
//     q: Joi.string(),
//     sort: Joi.string(),
//     filter: Joi.string(),
//     limit: Joi.string(),
//     offset: Joi.string(),
//   }),
// };

exports.patchMeSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

// exports.patchUserSchema = {
//   params: Joi.object({
//     id: Joi.string(),
//   }),
//   body: Joi.object({
//     full_name: Joi.string(),
//     username: Joi.string(),
//     password: Joi.string(),
//   }),
// };

exports.updatePasswordSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    password: Joi.string().required(),
    new_password: Joi.string().required(),
  }),
};

// exports.deleteUserSchema = {
//   params: Joi.object({
//     id: Joi.string(),
//   }),
// };
