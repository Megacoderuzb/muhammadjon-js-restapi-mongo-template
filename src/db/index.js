const mongoose = require("mongoose");
const config = require("../shared/config/index");
require("dotenv/config");

module.exports = async function () {
  return mongoose
    .connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB ga ulandi.");
    })
    .catch((err) => {
      console.log("DB da xatolik: ", err);
    });
};
