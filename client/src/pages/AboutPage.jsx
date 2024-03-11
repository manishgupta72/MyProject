import React from "react";
import Analytics from "../component/Analytics";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const AboutPage = () => {
const {user}=useAuth();

  return (
  <> 
  <main>
  <section className="section-hero home">
    <div className="container grid grid-two-cols">
      <div className="hero-content">
        {/* <p>We care to cure your Health</p> */}
        <h2 style={{fontSize:"38px",fontWeight:"bold"}}>Hi <span style={{color:"#008B8B"}}>{user ? user.name:"user"}</span></h2>
        <h1>Why Choose Us? </h1>
        <p>
          <span style={{fontWeight:"bold"}}>Expertise:</span> Our team consists of experienced IT professionals who
          are passionate about staying up-to-date with the latest industry
          trends.
        </p>
        <p>
        <span style={{fontWeight:"bold"}}>Customization: </span>We understand that every attendace System is unique.
          Thats why we create solutions that are tailored to your specific
          needs and goals.
        </p>
        <p>
        <span style={{fontWeight:"bold"}}>Security:</span> Addressing robust security measures to protect sensitive attendance data, ensuring data integrity and confidentiality.
        </p>
        <p>
        <span style={{fontWeight:"bold"}}> Affordability:</span> We offer competitive pricing without compromising
          on the quality of our services.
        </p>
        <p>
        <span style={{fontWeight:"bold"}}> Reliability:</span> Count on us to be there when you need us. We're
          committed to ensuring your IT environment is reliable and
          available 24/7.
        </p>
        <div className="mybtn mybtn-group">
          <NavLink to="/contact">
            <button className="mybtn"> Connect Now</button>
          </NavLink>
         
        </div>
      </div>
      <div className="hero-image">
        <img
          src="../about.jpg"
          alt="coding buddies "
          width="400"
          height="500"
        />
      </div>
    </div>
  </section>
</main>
<Analytics/>
</>
)
};

export default AboutPage;
