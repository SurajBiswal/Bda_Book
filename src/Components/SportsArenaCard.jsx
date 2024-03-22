import React from "react";
import "../StyleComponents/SportsArenaCard.css";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import SportsArenaImage from "../Localfiles/pexels-jonathan-petersson-399187.jpg";
function SportsArenaCard() {
  return (
    <div className="card">
      <div className="cardDetails">
        {/* Heading and Bookmark */}
        <div className="heading">
          <p>Cricket/Football</p>
          <FaRegBookmark className="bookmark-icon" />
        </div>

        {/* Image part */}
        <div className="image">
          <img src={SportsArenaImage} alt="Other Component Image" />
        </div>

        {/* Available button */}
        <div className="available">
          <p>Available</p>
        </div>

        {/* All details of the card */}
        <div className="details">
          {/* Name and place of the playground */}
          <div className="nameAdress">
            <p className="nameOfField">Netaji Sports Field,</p>
            <p className="adressOfField">Bargada Brit Colony (~10.3km)</p>
          </div>
          {/* Rating and numbers of review */}
          <div className="RateReview">
            {/* Rating */}
            <div className="Rating">
              <div className="rateIcon">
                <FaStar />
              </div>
              <div className="rateNumber">
                <p>4.2</p>
              </div>
            </div>
            <div className="reviewNumber">
              <p>(735)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsArenaCard;
