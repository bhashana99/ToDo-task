import express from 'express';
import { createNewTodo,getTodos,deleteTodo,fetchTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/create-todo', createNewTodo);
router.get('/get-todos', getTodos);
router.delete('/delete-todo/:id', deleteTodo);
router.get('/get-todo/:id', fetchTodo);

export default router;