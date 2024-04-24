// import the model
const Todo = require('../models/Todo');

exports. getTodos = async(req, res) => {
    try{
        // fetch todo data
        const fetchedData = await Todo.find({});

        // response
        res.status(200)
        .json({
            success: true,
            data: fetchedData,
            message: 'Entire data is successfully mapped',
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: 'Server error',
        })
    }
}

exports.getTodoById = async(req,res) => {
    try{
        // fetch id
        const id = req.params.id;

        const todo = await Todo.findById({_id: id});
        
        if(!todo){
            res.status(404).json({
                success: false,
                message: "No todo item found by this id",
            })
        }
        else{
            res.status(200)
            .json({
                success: true,
                data: todo,
                message: `Todo item by id: ${id} is found.`,
            })
        }

    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success: false,
            error: err,
            message: "server error",
        })
    }
}