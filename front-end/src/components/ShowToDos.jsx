import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

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

  return (
    <div className="mt-5 ">
      <h1 className="underline">Uncompleted to-do s</h1>
{todos.map((todo) => (
    
      <div key={todo._id} className="mt-5 border rounded-lg p-3 flex justify-between items-center gap-4 ">

       
        <div className="flex flex-col">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaEdit className="text-green-700" />
          <FaTrash className="text-red-700" />
        </div>
      </div>
       ))}
    </div>
  );
}
