require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes");

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.info("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Server is listening on ", port);
});
