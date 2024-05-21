import express from "express";
import {
  createNewTodo,
  getTodos,
  deleteTodo,
  fetchTodo,
  updateTodo,
  markAsComplete,
  filterTodos
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/create-todo", createNewTodo);
router.get("/get-todos", getTodos);
router.delete("/delete-todo/:id", deleteTodo);
router.get("/get-todo/:id", fetchTodo);
router.post("/update-todo/:id", updateTodo);
router.post("/mark-complete/:id", markAsComplete);
router.post("/filter-todos/:complete", filterTodos);

export default router;
