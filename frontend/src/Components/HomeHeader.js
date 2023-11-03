import React from "react";
import { Link } from "react-router-dom";
import "./HomeHeader.css";
import image from "../Assets/CoverImage.png";

function HomeHeader() {
  return (
    <div className="cover-container">
      <img src={image} alt="Cover Image" className="cover-image" />
      <div className="white-overlay"></div>
      <div className="Topic">
        <h1>Uncover shoes that mirror your style</h1>
      </div>
      <div className="button">
        <Link to="/All">
          <button type="button" className="btn btn-dark">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
