import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
import { useSelector } from "react-redux";
import Profile from "./private/profile";
import CoursesPage from "./private/courses";
import ForgetPassword from "./public/pages/ForgetPassword";

export const serverUrl = "http://localhost:8000";

const App = () => {
  // calling getCurrentUser function
  getCurrentUser();
  const { userData } = useSelector((state) => state.user); // Access user data from Redux store
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/forgot-password"
          element={userData ? <ForgetPassword /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={!userData ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={userData ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-courses"
          element={userData ? <CoursesPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
};

export default App;
