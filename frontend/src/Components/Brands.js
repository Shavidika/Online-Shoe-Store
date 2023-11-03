import React from 'react'
import nike from "../Assets/Nike_logo.png";
import adidas from "../Assets/Adidas_logo.png";
import puma from "../Assets/Puma_logo.png";
import reebok from "../Assets/Reebok_logo.png";
import vans from "../Assets/Vans_logo.png";
import "./Brands.css";

export default function Brands() {
  return (
    <div className="box">
            <button>                
                <img src={nike} alt="Nike Logo" className="logos"/> 
            </button>
            <button>                
                <img src={adidas} alt="Nike Logo" className="logos"/> 
            </button>
            <button>                
                <img src={puma} alt="Nike Logo" className="logos"/> 
            </button>
            <button>                
                <img src={reebok} alt="Nike Logo" className="logos"/> 
            </button>
            <button>                
                <img src={vans} alt="Nike Logo" className="logos"/> 
            </button>
    </div>
  )
}
