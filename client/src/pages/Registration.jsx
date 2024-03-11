import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const image = "../register.png";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import axios from "axios";
const Registration = () => {
  const [data,setdata]=useState([])
  const [user, setUser] = useState({
    username: "",
    image: "",
    name: "",
    email: "",
    card: "",
    course: "",
    classes: "",
    rollno: "",
    dob: "",
    address: "",
    blood: "",
    year: "",
    gender: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = (e) => {
    setUser({ ...user, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("username", user.username);
    formData.append("image", user.image);
    formData.append("email", user.email);
    formData.append("card", user.card);
    formData.append("course", user.course);
    formData.append("classes", user.classes);
    formData.append("rollno", user.rollno);
    formData.append("dob", user.dob);
    formData.append("address", user.address);
    formData.append("blood", user.blood);
    formData.append("year", user.year);
    formData.append("gender", user.gender);
    formData.append("phone", user.phone);
    formData.append("password", user.password);

    try {
      const response = await fetch(`${import.meta.env.VITE_SOME_KEY}/api/auth/register`, {
        method: "POST",
       
        body:formData,
      });
      const res = await response.json();
      console.log(res);
      if (response.ok) {
        setUser({
          username: "",
          name: "",
          email: "",
          card: "",
          image: "",
          course: "",
          classes: "",
          rollno: "",
          dob: "",
          address: "",
          blood: "",
          year: "",
          gender: "",
          phone: "",
          password: "",
        });
        toast.success("Registration Success");
      } else {
        toast.error(res.extraDetails ? res.extraDetails : res.message);
      }
    } catch (error) {
      console.error("Register", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration home">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-top-img reg-img">
                <img
                  src={image}
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Student Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={user.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={user.name}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={user.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="card">card</label>
                    <input
                      type="text"
                      name="card"
                      placeholder="Card"
                      value={user.card}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Course">Course</label>
                    <input
                      type="text"
                      name="course"
                      placeholder="Course"
                      value={user.course}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Course">Classes</label>
                    <input
                      type="text"
                      name="classes"
                      placeholder="Classes"
                      value={user.classes}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="RollNo">RollNo</label>
                    <input
                      type="text"
                      name="rollno"
                      placeholder="RollNo"
                      value={user.rollno}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="RollNo">DOB</label>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      value={user.dob}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label>Profile Image</label>
                    <label
                      className="btn btn-outline-secondary w-75 "
                      style={{ fontSize: "20px" }}
                    >
                      {user.image ? user.image.name : "Upload Image"}
                      <input
                        type="file"
                        name="image"
                        hidden
                        onChange={uploadImage}
                      />
                    </label>
                  </div>
                  {/* show image start */}
                  {/* <div>
                    {user && (
                      <div>
                        <img
                          src={URL.createObjectURL(user.image)}
                          alt="student image"
                          style={{
                            width: "400px",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}
                  </div> */}
                  {/* show image end */}
                  <div>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={user.address}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Blood">Blood</label>
                    <input
                      type="text"
                      name="blood"
                      placeholder="Blood"
                      value={user.blood}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Blood">Year</label>
                    <input
                      type="text"
                      name="year"
                      placeholder="Year"
                      value={user.year}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between w-75 ">
                    <label htmlFor="Gender">Gender</label>

                    <div className="d-flex flex-column align-items-center">
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>Female</label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      value={user.phone}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={user.password}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Create Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
