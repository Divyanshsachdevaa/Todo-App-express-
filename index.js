const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;


// middleware to parse json request body
app.use(express.json());

// import routes for Todo API
const todoRoutes = require("./routes/todos");

// mount the todo ASPI routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

// connect with db
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/", (req, res) => {
    res.send(`<h1> This is homepage mitro</h1>`);
})

// app.get("/getTodos"), (req, res) => {
//     res.send(``)
// }