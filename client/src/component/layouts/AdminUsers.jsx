import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { Link } from "react-router-dom";
import EditUser from "./EditUser";
import { toast } from "react-toastify";
const AdminUsers = () => {
  const [users, setUser] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SOME_KEY}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user
  const deleteUser = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SOME_KEY}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after deleted ${data}`);
      if (response.ok) {
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-user">
          <table
            style={{ backgroundColor: "#FFFAF0", fontSize: "20px" }}
            className="table  table-striped"
          >
            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Card Number</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                
                return (
                  <tr key={index}>
                    {curUser.isAdmin ? (
                      ""
                    ) : (
                      <Link to={`${import.meta.env.VITE_SOME_KEY}/admin/users/${curUser._id}/profile/${curUser.card}`}>
                        <td>
                          <img
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                            }}
                            className="profile_img"
                            src={`${host}/api/auth//student-photo/${curUser._id}`}
                          />
                        </td>
                      </Link>
                    )}

                    <td>{curUser.isAdmin ? "" : curUser.name}</td>
                    <td>{curUser.isAdmin ? "" : curUser.rollno}</td>
                    <td>{curUser.isAdmin ? "" : curUser.card}</td>
                    <td>
                      {curUser.isAdmin ? (
                        ""
                      ) : (
                        <button>
                          <Link
                            style={{
                              color: "white",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                            to={`${host}/admin/users/${curUser._id}/edit`}
                          >
                            Edit
                          </Link>
                        </button>
                      )}
                    </td>
                    <td>
                      {curUser.isAdmin ? (
                        ""
                      ) : (
                        <button
                          onClick={() => {
                            deleteUser(curUser._id);
                            toast.success("User Deleted!");
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
