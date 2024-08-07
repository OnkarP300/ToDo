const mongoose = require("mongoose")

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 20,
            minlength: 2
        },
        desc: String
    },
    { timestamps: true }
)

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;