import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContactFormData);
  const { user, isLoggedIn } = useAuth();

  const [userData, setuserData] = useState(true);

  if (user && userData) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setuserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_SOME_KEY}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        toast.success("Message Send");
        console.log(data);
      }
    } catch (error) {
      console.log("error from contact page", error);
    }

    console.log(contact);
  };

  //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section className="section-contact home">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="../support.png"
              alt="we are always ready to help"
            />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <div>
                <button className="btn btn-primary" style={{fontSize:"18px"}} type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.874493379259!2d72.81174562466293!3d18.981149454944447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7bb3dcb1ad%3A0x80dbfa832c9e69f2!2sLala%20Lajpat%20Rai%20College%20of%20Commerce%20and%20Economics!5e0!3m2!1sen!2sin!4v1704997753383!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrepolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
