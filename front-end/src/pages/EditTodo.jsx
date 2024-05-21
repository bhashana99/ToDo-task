import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate} from "react-router-dom";


export default function EditTodo() {
const params = useParams();
const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  
 

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const id = params.id;
        const res = await fetch(`/api/todo/get-todo/${id}`);
        const data = await res.json();
        if (data.success === false) {
          setError(data.message);
        } else {
          setFormData(data);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchTodo();
  }, [params.id]);

  const handleChange = (e) => { setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
     
      const res = await fetch(
        `/api/todo/update-todo/${params.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-700 h-screen">
      <div className="max-w-4xl mx-auto p-10 ">
        <h1 className="text-center text-xl md:text-3xl">My To-Do List</h1>
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
                {loading ? "Updating..." : "Update "}
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 px-5 "
                >
                  Cancel
                </button>
              </Link>
            </div>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
