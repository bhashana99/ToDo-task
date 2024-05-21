import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import ToDoForm from "../components/ToDoForm";
import ShowToDos from "../components/ShowToDos";

export default function ToDo() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="bg-slate-700 h-screen">
      <div className="max-w-4xl mx-auto p-10 ">
        <h1 className="text-center text-xl md:text-3xl">My To-Do List</h1>

        <div className="mt-5">
          <div className="mt-5">
            {!showForm && (
              <div className="flex flex-row gap-4 items-center">
                <div
                  onClick={toggleForm}
                  className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center hover:border-green-600 cursor-pointer "
                >
                  <FaPlus className="text-2xl text-blue-600 " />
                  <h3>Add New </h3>
                </div>
                <div>
                  <IoFilter className="text-3xl" />
                </div>
              </div>
            )}
          </div>
          {showForm && (
            <ToDoForm toggleForm={toggleForm}  />
          )}
          <ShowToDos />
        </div>
      </div>
    </div>
  );
}
