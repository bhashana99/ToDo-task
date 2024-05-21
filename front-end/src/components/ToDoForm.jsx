import React from 'react'

export default function ToDoForm({ toggleForm }) {
  return (
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
  )
}
