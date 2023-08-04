const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const deleteUser = async ({ id }) => {
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  return User.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = deleteUser;
