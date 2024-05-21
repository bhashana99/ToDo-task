import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}
