import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import PublicLayout from "@/layouts/PublicLayout";

// Pages
import Home from "@/public/pages/Home";
import About from "@/public/pages/About";
import Contact from "@/public/pages/Contact";
import Courses from "@/public/pages/Courses";
import Careers from "@/public/pages/Career";
import Login from "@/public/pages/Login";
import Register from "@/public/pages/Register";
import ComingSoonPage from "@/public/pages/ComingSoonPage";
import getCurrentUser from "./customHooks/getCurrentUser";

export const serverUrl = "http://localhost:8000";

const App = () => {
  // calling getCurrentUser function
  getCurrentUser();
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
};

export default App;
