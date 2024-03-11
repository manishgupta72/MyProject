import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        
          {/* <!-- Copyright --> */}
        <div className="copyright d-flex justify-content-center">
          <div className="text-center " style={{cursor:"pointer"}}>
            © 2024 AttendEase. All rights reserved.
          </div>
          <div className="copysocial ml-5 ">
            <Link to="#" >
              <i className="fa-brands fa-twitter mx-3 " ></i>
            </Link>

            <Link to="#">
              <i className="fa-brands fa-facebook-f mx-3"></i>
            </Link>

            <Link to="#">
              <i className="fa-brands fa-instagram mx-3"></i>
            </Link>
          </div>
        </div>
        {/* <!-- Copyright --> */}
        
      </div>
    </>
  );
};

export default Footer;
