function createTodoValidator(req, res, next) {
    if(!req.body.todoText) {
        return res.json({msg: 'Invalid request'})
    }

    // if u r sending everything reqd
    next();
}

module.exports={
    createTodoValidator
}