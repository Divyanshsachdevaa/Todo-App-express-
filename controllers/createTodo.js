// import th model
const Todo = require('../models/Todo');

// route handler
exports.createTodo = async (req, res) => {
    try{
        // extract title and description from request body
        const {title, description} = req.body;
        
        // now create a Todo object and insert it in database
        const response = await Todo.create({title, description});

        //send a json respone with a success flag
        res.status(200).json(
            {
                status: true,
                data: response,
                message: 'Entry created Successfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: 'internal server error',
            message:err.message,
        })
    }
}