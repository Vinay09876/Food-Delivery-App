import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left-side">
          <h1>Bite2Eat.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque
            incidunt ipsam modi dolores eum officia ducimus nemo voluptates
            perferendis expedita eos amet veritatis delectus architecto,
            reiciendis blanditiis eius totam.
          </p>
          <div className="footer-social-links">
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-center-side">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right-side">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7977545292</li>
            <li>vinayippakayala01@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Bite2Eat.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
