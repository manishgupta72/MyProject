import React from "react";
import Analytics from "../component/Analytics";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="section-hero home">
          <div className="container grid grid-two-cols">
            <div className="hero-content ">

              <h1>Welcome to AttendEase</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further. We specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="mybtn mybtn-group">
                <a href="/contact">
                  <button className="mybtn">connect now</button>
                </a>
              </div>
            </div>
              
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="./adminHome.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section */}
     <Analytics/>

      {/* 3rd section */}
       {/* 3rd section  */}
       <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="../rfid-logo.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how we can help your Attendance System thrive in
              the digital age.
            </p>
            <div className="mybtn mybtn-group">
              <a href="/contact">
                <button className="mybtn">connect now</button>
              </a>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
