import express from 'express';
import { createNewTodo,getTodos,deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/create-todo', createNewTodo);
router.get('/get-todos', getTodos);
router.delete('/delete-todo/:id', deleteTodo);

export default router;