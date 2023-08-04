const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const UserRoutes = require("./modules/users/_api");

const app = express();
//
app.use(express.json());
//
app.use(UserRoutes);

db();
app.listen(config.port, () => {
  console.log(`Server http://localhost:${config.port}.`);
});
