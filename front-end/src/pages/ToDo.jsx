import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

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
            <div className="mt-5">
              <form className="mt-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="p-2 border-2 border-gray-500"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    className="p-2 border-2 border-gray-500"
                  ></textarea>
                </div>
                <div className="flex flex-row gap-5 mt-5 justify-end">
                  <button className="bg-green-500 text-white p-2 px-5 ">
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="bg-red-500 text-white p-2 px-5 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
