import React from "react";
import Navbar from "../homepage/Navbar";
import Items from "./Items";

import Eatables from "./Eatables";

import { Link, Outlet } from "react-router-dom";



function createItem(itemelemnet){
    return(
    <Items 
    key={itemelemnet.id}
    img={itemelemnet.img}
    price={itemelemnet.price}
    name={itemelemnet.name}
     />
      )
}



function EatablesPage(){
    return(
        <div>
        <Navbar/>
        <div className="buttons">
        <Link to={"/products"}></Link><button className="product-button">Show all</button>
        <button className="product-button">Biscuits And Cookies</button>
        <Link to={"/products/beverages"}><button className="product-button">Beverages</button></Link>
        <Link to={"/products/biscuits"}></Link><button className="product-button">BodyCare</button>
        <Link to={"/products/cleaning"}></Link><button className="product-button">Cleaning</button>
        <Link to={"/products/eatables"}></Link><button className="product-button">Eatables</button>
        <Link to={"/products/haircare"}></Link><button className="product-button">HairCare</button>
        </div>

        <div className="all-products">
       
        {Eatables.map(createItem)}
       
        </div>
        </div>
    )
}

export default EatablesPage;
