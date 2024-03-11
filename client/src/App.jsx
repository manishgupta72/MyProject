import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./component/layouts/AdminLayout";
import AdminUsers from "./component/layouts/AdminUsers";
import AdminContact from "./component/layouts/AdminContact";
import EditUser from "./component/layouts/EditUser";
import AdminHome from "./component/layouts/AdminHome";
import StudentProfile from "./component/StudentProfile";
import StudentCalendar from "./component/StudentCalendar";
import UserProfile from "./component/layouts/UserProfile";
import Students from "./pages/Students";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/students" element={<Students />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/profile" element={<StudentProfile />} />
          <Route exact path="/checkAttendace" element={<StudentCalendar />} />

          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/users" element={<AdminUsers />} />
          <Route path="*" element={<Error />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="/admin/users/:userId/edit" element={<EditUser />} />
            <Route
              path="/admin/users/:userId/profile/:cardId"
              element={<UserProfile />}
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
