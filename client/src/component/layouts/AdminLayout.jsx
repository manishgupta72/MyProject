import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import AdminUsers from "./AdminUsers";
const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
    <div className="container-fluid border">
      <div className="row">
      <div className="col-md-2 p-4" style={{backgroundColor:"	#F0FFF0"}}>
        <div className="adminNavbar">
          <ul>
            <li className="text-center">
              <NavLink to="/admin/home">
                <FaHome /> Home
              </NavLink>
            </li>

            <li className="text-center">
              <NavLink to="/admin/users">
                <FaUser /> Users
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink to="/admin/contacts">
                <SiGooglemessages />Contacts
              </NavLink>
            </li>
           
          </ul>
        </div>

        
      </div>
          <div className="col-md-10" style={{backgroundColor:"#F8F8FF"}}>
          <main>
            <Outlet />
        </main>
          </div>
      </div>
      </div>
    </>
  );
};

export default AdminLayout;
