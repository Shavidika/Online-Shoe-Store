import "./NavBar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";

function NavBar(){
    return (
      <div className="header">
      <Link  to="/" className="nav-link">
        <div className="Header">Online Shoe Store</div>
      </Link>
      <nav className="frame">
        <div className="div">
          <span className="text-wrapper-2">Gents</span>
          <RiArrowDropDownLine/>
        </div>
        <div className="div">
          <span className="text-wrapper-2">Ladies</span>
          <RiArrowDropDownLine/>
        </div>
        <div className="text-wrapper-2">New Arrivals</div>
        <div className="text-wrapper-2">Brands</div>
      </nav>
      <div className="searchBox">
        <BsSearch className="searchIcon"/>
        <div className="text-wrapper-4">Search for products...</div>
      </div>
      <Link to="/cart">
        <div className="CartButton"><BsCart3 className="cartIcon"/></div>  
      </Link>
      <Link to="/sign">
        <div className="CartButton"><BiUserCircle className="userIcon ml-0"/></div>  
      </Link>
    </div>
    );
}

export default NavBar;