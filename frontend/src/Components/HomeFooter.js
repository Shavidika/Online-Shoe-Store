import React from 'react'
import CoverImage from "../Assets/CoverImageFooter.png";
import "./HomeFooter.css";

export default function () {
  return (
    <div>
    <div className="footer-cover-container">
        <img
          src={CoverImage}
          alt="Cover Image1"
          className="footer-cover-image"
        /> 
        
        <div className="footer-Topic">
            <h1 className='first_line_Topic'>Are Shoe Sizes</h1>
            <h1>Still a Concern?</h1>
        </div>
        <div className="footer-paragraph">
            <h1>Simply provide your foot size, and we'll curate a selection of the finest shoes tailored perfectly to your dimensions.</h1>
        </div>
        <div className="footer-button">
              <button type="button" class="btn btn-dark">Try Now</button>
        </div>
      </div>
    </div>
  )
}
