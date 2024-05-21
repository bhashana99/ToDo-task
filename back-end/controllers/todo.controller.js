import Todo from "../models/todo.model.js";

export const createNewTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        return res.status(201).json(todo);
    } catch (error) {
        console.log(error);
    }
}