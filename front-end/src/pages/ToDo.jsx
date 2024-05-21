import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import ToDoForm from "../components/ToDoForm";
import ShowToDos from "../components/ShowToDos";

export default function ToDo() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value); 
  };

  return (
    <div className="bg-slate-700 ">
      <div className="max-w-4xl mx-auto p-10 ">
        <h1 className="text-center text-xl md:text-3xl">My To-Do List</h1>

        <div className="mt-5">
          <div className="mt-5">
            {!showForm && (
              <div className="flex  gap-4 items-center">
                <div
                  onClick={toggleForm}
                  className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center hover:border-green-600 cursor-pointer "
                >
                  <FaPlus className="text-2xl text-blue-600 " />
                  <h3>Add New </h3>
                </div>
                
              </div>
            )}
          </div>
          <div className="mt-5 flex flex-row gap-5">
            
            <h2>Filter : </h2>
            <select onChange={handleFilter} value={filter} >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
          </div>
          {showForm && (
            <ToDoForm toggleForm={toggleForm}  />
          )}
          <ShowToDos filter={filter} />
        </div>
      </div>
    </div>
  );
}
