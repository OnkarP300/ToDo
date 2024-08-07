const mongoose = require("mongoose");


const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("Database connection successfull");
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectMongoDb;