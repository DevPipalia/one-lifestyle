import React from "react";
import { NavLink,Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            {/* <img className="logo" src="http://wallpaperset.com/w/full/c/7/f/402336.jpg"/> */}
            <Link to={"/"}><h2 className="header-text lifestyle">Lifestyle</h2></Link>
            <NavLink to={"/products"}><p className="header-text products"> Products</p></NavLink>
            <NavLink to={"/offers"}><p className="header-text offers">Offers</p> </NavLink>
            <NavLink to={"/about"}><p className="header-text about ">About Us</p></NavLink>
            <NavLink to={"/cart"}><p className="header-text cart">🛒</p></NavLink>
        </div>
    )
}

export default Navbar;