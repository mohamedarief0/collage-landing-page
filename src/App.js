import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/AboutCollege/AboutCollege";
import Graduation from "./pages/Graduation/Graduation";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/main.css";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/காணொளி" element={<Graduation />} />
      </Routes>
    </>
  );
}