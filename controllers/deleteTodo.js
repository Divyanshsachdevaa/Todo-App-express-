const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Todo successfully DELETED",
        })
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
