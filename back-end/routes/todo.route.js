import express from 'express';
import { createNewTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/create-todo', createNewTodo);

export default router;