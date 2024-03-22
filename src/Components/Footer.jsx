import React from "react";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../StyleComponents/Footer.css";
function Footer() {
  return (
    <div className="outer">
      <div className="middleTop">
        <div className="left">
          <div className="title">
            <h4>Ama Bhoom</h4>
            <Icon
              icon="healthicons:exercise-yoga"
              style={{ color: "#00B562" }}
            />
          </div>
          <div className="subTitle">
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Partner With Us</a>
            <a href="">Carrier</a>
          </div>
        </div>
        {/* Right side */}
        <div className="right">
          <div className="socialText">
            <p>Follow us on social media</p>
          </div>
          <div className="socialMediaIcons">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#C13584" }} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
          </div>
        </div>
      </div>
      {/* Footer elemets */}
      <div className="middleBottom">
        <a href="">Legal Stuff</a>
        <a href="">Security</a>
        <a href="">Privacy Policy</a>
        <a href="">Copyright © 2024 Ama Bhoomi. All Rights Reserved.</a>
      </div>
    </div>
  );
}

export default Footer;
