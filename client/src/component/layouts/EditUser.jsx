import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const EditUser = ({ curUser }) => {
  const [data, setData] = useState({
    username: "",
    name: "",
    email: "",
    course: "",
    classes: "",
    phone: "",
    address: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    address:"",
    classes:"",
    dob:""
  });
  
  console.log("data in admin ", data);
  const { authorizationToken } = useAuth();
  const params = useParams();
  console.log("Params single user:", params);

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SOME_KEY}/api/admin/users/${params.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`single user data ${data}`);
      setUpdateData(
        {
          name: data.name,
          address:data.address,
          classes: data.classes,
          dob:data.dob
        }
      )
      setData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getSingleUserData();
    
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
    setUpdateData((prev) => ({ ...prev, [name]: value }));
    
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch(
        `${host}/api/admin/users/update/${params.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(updateData),
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("updated Successfully");
      } else {
        toast.error("Not updated");
      }
    } catch (error) {
      console.error("Error when update data:", error);
    }
  };
  return (
    <div>
      <section>
        <main>
          <div className="section-updation">
            {/* our main registration code  */}
            <div className="updation-form">
              <h1 className="main-heading mb-3">Update User Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    disabled
                    placeholder="username"
                    value={data.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={data.name}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={data.email}
                    disabled
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    disabled
                    value={data.phone}
                    onChange={handleInput}
                  />
                </div> 
                <div>
                  <label htmlFor="phone">classes</label>
                  <input
                    type="text"
                    name="classes"
                    placeholder="classes"
                    value={data.classes}
                    onChange={handleInput}
                  />
                </div>{" "}
                <div>
                  <label htmlFor="course">Course</label>
                  <input
                    type="text"
                    name="course"
                    disabled
                    placeholder="course"
                    value={data.course}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="address">address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={data.address}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="mybtn  btn-submit"
                  style={{ border: "0px solid white" }}
                >
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default EditUser;
