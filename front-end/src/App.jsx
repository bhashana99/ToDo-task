import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import EditTodo from "./pages/EditTodo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/edit-todo/:id" element={<EditTodo/>} />

      </Routes>
    </BrowserRouter>
  );
}
