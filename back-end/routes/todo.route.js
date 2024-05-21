import express from 'express';
import { createNewTodo,getTodos } from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/create-todo', createNewTodo);
router.get('/get-todos', getTodos);

export default router;