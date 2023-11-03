import React from "react";
import react, {useState} from 'react';
import "./MsgOnTop.css";
import { RxCross1 } from "react-icons/rx";

function MsgOnTop() {
  const[close,SetClose] = useState(1);

  function Close(){
    SetClose(0);
  }

  if (close == 0){
    return null;
  }
  else{
    return (
      <div className="box">
        <div className="overlap-group">
          <p className="sign-up-and-get">
            <span className="text-wrapper">
              Sign up and get 20% off your first order.
            </span>
            <span className="span">Sign Up Now</span>
          </p> 
  
          <button type="button" onClick={Close} className="btn btn-primary" className="CrossButton">
            <RxCross1 className="CrossButton"/>
          </button>
  
  
        </div>
      </div>
    );
  }
}

export default MsgOnTop;
