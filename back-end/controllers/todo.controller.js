import Todo from "../models/todo.model.js";

export const createNewTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Todo deleted!" });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    return res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateTodo);
  } catch (error) {
    console.log(error);
  }
};

export const markAsComplete = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    await todo.save();
    return res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};
