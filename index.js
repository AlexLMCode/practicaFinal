require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

const { routerApi } = require("./src/routes");

app.listen(PORT, () => {
  console.log("ACTIVE PORT", PORT);
});

mongoose
  .connect(process.env.STRING_CONNECTION_MONGODB)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(express.json());
routerApi(app);
