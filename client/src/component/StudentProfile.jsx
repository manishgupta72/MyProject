import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import Calendar from "./StudentCalendar";
import StudentCalendar from "./StudentCalendar";


const StudentProfile = () => {
  const { user } = useAuth();

  const [users, setUser] = useState([]);
  const [info, setInfo] = useState({
    tclass: 0,
    present: 0,
  });
  let prAtnd = (info.present / info.tclass) * 100;

  return (
    <>
      <div>
        <div className="student-profile py-4 home">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card shadow-sm home">
                  <div className="card-header bg-transparent text-center">
                    <img
                      className="profile_img"
                      src={`${import.meta.env.VITE_SOME_KEY}/api/auth//student-photo/${user._id}`}
                    />
                    <h3>{user && user.name}</h3>
                    <h3 style={{ color: "gray" }}>
                      {user && user.isAdmin == true ? "Admin" : ""}
                    </h3>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      <strong className="pr-1">Card ID:</strong>
                      {user && user.card}
                    </p>
                    <p className="mb-0">
                      <strong className="pr-1">Class:</strong>
                      {user && user.classes}
                    </p>
                    <p className="mb-0">
                      <strong className="pr-1">Course:</strong>
                      {user && user.course}
                    </p>
                    <p className="mb-0">
                      <strong className="pr-1">DOB:</strong>
                      {user && user.dob}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow-sm bg-light">
                  <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">General Information</h3>
                  </div>
                  <div className="card-body pt-0">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Roll Number</th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.rollno}</td>
                        </tr>
                        <tr>
                          <th>Academic Year </th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.year}</td>
                        </tr>
                        <tr>
                          <th>Gender</th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.gender}</td>
                        </tr>
                        <tr>
                          <th>Email</th>

                          <td>{user && user.email}</td>
                        </tr>
                        <tr>
                          <th>Mobile</th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.phone}</td>
                        </tr>
                        <tr>
                          <th>Blood</th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.blood}</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          {/* <td width="2%">:</td> */}
                          <td>{user && user.address}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div style={{ height: 26 }} />

                <div className="card shadow-sm mt-3">
                  <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">Calendar</h3>
                    {user && (
                      <StudentCalendar
                        card={user && user.card}
                        setInfo={setInfo}
                      />
                    )}
                  </div>
                </div>
                <div className="card shadow-sm mt-4">
                  <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">Attendance Information</h3>
                  </div>
                  <div className="card-body pt-0">
                    <span>
                      <h3>
                        Total Classes:{" "}
                        <span class="badge bg-primary text-light">
                          {info.tclass}{" "}
                        </span>
                      </h3>
                    </span>

                    <h3>
                      Total Present:
                      <span class="badge bg-success text-light mx-3">
                        {info.present}
                      </span>
                      <span class="badge bg-success text-light">
                        {((info.present / info.tclass) * 100).toFixed(1)}%{" "}
                      </span>
                    </h3>

                    <h3>
                      Total Absent:{" "}
                      <span class="badge bg-danger text-light mx-3">
                        {info.tclass - info.present}
                      </span>
                      <span class="badge bg-danger text-light">
                   
                        {(100 - prAtnd).toFixed(1)}%{" "}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
