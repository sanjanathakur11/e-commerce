import React from 'react';
import "./About.css";
import AmazonLogo from "../../assets/amazon-logo.webp";
const About = () => {
  return (

    <div class="About-continer">
      <h2>About us</h2>
      <div class="Main">
        <div class="about-image">
          <img src={AmazonLogo} alt="" />
        </div>
        <div class="about-text">
          <p>
            Welcome to our online store! We are passionate about providing
            you with high-quality products and an exceptional shopping
            experience. Our mission is to make your online shopping journey
            easy, enjoyable, and memorable.
          </p>
          <p >
            Our team is dedicated to selecting the finest products,
            maintaining strict quality control, and delivering them to your
            doorstep with care. We value your trust and satisfaction, and we
            strive to exceed your expectations.
          </p>
        </div>
      </div>
      <div className="team">
        <h2> Our Team</h2>
      </div>
      <div className="team-detail">
        Our diverse team consists of passionate individuals who share a common goal:
        to provide you with an amazing shopping experience. We're here to help you
        with any questions or concerns you may have. Feel free to reach out to us anytime.
      </div>
    </div>


  )
}

export default About