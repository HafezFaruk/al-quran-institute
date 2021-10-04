import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h4>Al Quran Institute</h4>
                <p className="mt-4 ">
                  <small>
                    
                  </small>
                </p>

                <p className="mt-5">
                  <small>Quran &copy; All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Sports</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="right-footer-container">
                <h6>Sign up for the newsletter</h6>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="mt-4">
                  <div>
                    <p>08903653 37</p>
                  </div>
                </div>
                <div>
                    <p>Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
