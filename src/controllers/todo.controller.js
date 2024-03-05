const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');
const TodoMySQLRepository = require('../repositories/todoMysql.repository');

const todoService = new TodoService(new TodoRepository());

function getTodos(req, res) {
    const response = todoService.getAllTodos();
    return res.json({
        data: response
    })
} 

function createTodo(req, res) {
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({
        data: 'New todo created'
    })
} 


module.exports = {
    getTodos,
    createTodo
}