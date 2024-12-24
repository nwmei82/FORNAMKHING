"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../component/page";
import Chapt from "../component/chapt";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapt" element={<Chapt />} />
      </Routes>
    </Router>
  );
}
