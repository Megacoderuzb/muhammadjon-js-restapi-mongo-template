require("dotenv/config");

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: process.env.MONGO_ATLAS_URL,
  jwt_secret: process.env.JWT_SECRET,
};
