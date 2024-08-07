const app = require("./app")

const PORT = process.env.PORT || "8000";

// listening port 
app.listen(PORT, () => {
    console.log(`listening server at port ${PORT}`)
})