import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <header>
        <div className="header" style={{ alignItems: "center" }}>
          <div className="logo-brand">
            <NavLink to="/">
              <img src="../logo.png" style={{ marginLeft:"100px",height: 60, width: 60 }} />
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              {isLoggedIn && user?.isAdmin?(<> <li>
                <NavLink to="/students"> Students </NavLink>
              </li></>):(<> <li>
                <NavLink to="/about"> About </NavLink>
              </li></>)}
             
              
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedIn && !user?.isAdmin? (
                <>
                  <li>
                    <NavLink to="/profile"> Profile </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
              {user?.isAdmin&&isLoggedIn == true ? (
                <>
                  <li>
                    <NavLink to="/register"> Add Student </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
