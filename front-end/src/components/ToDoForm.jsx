import React from "react";
import { useState } from "react";

export default function ToDoForm({ toggleForm }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/todo/create-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        toggleForm();
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            id="title"
            className="p-2 border-2 border-gray-500"
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            value={formData.description}
            id="description"
            className="p-2 border-2 border-gray-500"
          ></textarea>
        </div>
        <div className="flex flex-row gap-5 mt-5 justify-end">
          <button
            disabled={loading}
            className="bg-green-500 text-white p-2 px-5 "
          >
            {" "}
            {loading ? "Creating..." : "Add "}
          </button>
          <button
            type="button"
            onClick={toggleForm}
            className="bg-red-500 text-white p-2 px-5 "
          >
            Cancel
          </button>
        </div>
        {error && <p className="text-red-700">{error}</p>}
      </form>
    </div>
  );
}
