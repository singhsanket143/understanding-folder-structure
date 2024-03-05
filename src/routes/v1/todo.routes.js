const express = require('express');
const { getTodos, createTodo } = require('../../controllers/todo.controller');
const { createTodoValidator } = require('../../validators/todo.validator');

const todoRouter = express.Router();

todoRouter.get('/', getTodos);

todoRouter.post('/', createTodoValidator, createTodo);

module.exports = todoRouter;