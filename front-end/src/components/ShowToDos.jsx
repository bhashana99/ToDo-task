import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ShowToDos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api/todo/get-todos");
        const data = await res.json();
        if (data.success === false) {
          setError(data.message);
        } else {
          setTodos(data);
        }
      } catch (error) {
        setError(true);
        console.log(showProjectError);
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteTodo = async (todoId) => {
    try {
      const res = await fetch(`/api/todo/delete-todo/${todoId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const handleCompleteTodo = async (todoId) => {
    try {
      const res = await fetch(`/api/todo/mark-complete/${todoId}`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 ">
      <h1 className="underline">Uncompleted to-do s</h1>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="mt-5 border rounded-lg p-3 flex flex-col md:flex-row justify-between items-center gap-4 "
        >
          <div className="flex flex-col">
            <h3 className={`text-xl font-bold ${todo.complete ? "line-through" : "no-underline"}`}>{todo.title}</h3>
            <p >{todo.description}</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <button
              onClick={() => handleCompleteTodo(todo._id)}
              className={`p-2 ${
                todo.complete ? "bg-red-500" : "bg-green-500"
              } text-white`}
            >
              {todo.complete ? "Set Incomplete" : "Mark as Complete"}
            </button>
            <Link to={`/edit-todo/${todo._id}`}>
              <FaEdit className="text-green-700" />
            </Link>
            <FaTrash
              onClick={() => {
                handleDeleteTodo(todo._id);
              }}
              className="text-red-700"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
