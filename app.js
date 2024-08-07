const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const connectMongoDb = require("./init/mongodb");
const route = require("./routes/todoRoutes");
const dotenv = require("dotenv");

// Environment variable
dotenv.config()

// init app
const app = express();

// MongoDb connection
connectMongoDb();

// view engine
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", route)

module.exports = app;