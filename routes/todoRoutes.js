
const express = require("express")
const todo = require("../controllers/todo")


const route = express.Router()

// Home 
route.get("/", todo.homeController)

// Add 
route.get("/add-todo", todo.addTodoFormController)

// Update 
route.get("/update-todo", todo.updateTodoFormController)

// Delete 
route.get("/delete-todo", todo.deleteTodoFormController)

// Post add todo
route.post("/add-todo", todo.addTodoController)

// Post updated todo
route.post("/update-todo/:id", todo.updateTodoController)

// confirm delete
route.get("/confirm-delete", todo.confirmdeleteController)

module.exports = route;