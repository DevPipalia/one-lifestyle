import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <img className="logo" src="http://wallpaperset.com/w/full/c/7/f/402336.jpg"/>
            <h2 className="header-text lifestyle">Lifestyle</h2>
            <p className="header-text products"> Products</p>
            <p className="header-text offers">Offers</p>
            <p className="header-text about ">About Us</p>
            <p className="header-text cart">🛒</p>
        </div>
    )
}

export default Navbar;