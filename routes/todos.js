const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodos, getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


// define API controller
router.post("/createTodo", createTodo); // path ko controller se map kr rha hai
router.post("/getTodos", getTodos); // path ko controller se map kr rha hai
router.post("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;
