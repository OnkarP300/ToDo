const express = require("express");

// init app

const app = express();

const PORT = "8000";

// view engine
app.set("view engine", "ejs")

// listening port 
app.listen(PORT, () => {
    console.log(`listening server at port ${PORT}`)
})