import React from "react";
import Navbar from "../homepage/Navbar";
import Items from "./Items";
// import ItemsData from "./CleaningData";
import Beverages from "./BeveragesData";
import Biscuits from "./BiscuitsData";
import BodyCare from "./BodyCareData";
import HairCare from "./HairCareData";
import Eatables from "./Eatables";
import Cleaning from "./CleaningData";


function handleClick(){
    return(
    console.log
    )
}

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



function Product(){
    return(
        <div>
        <Navbar/>
        <div className="buttons">
        <button className="product-button">Show all</button>
        <button className="product-button">Biscuits And Cookies</button>
        <button className="product-button">Beverages</button>
        <button className="product-button">BodyCare</button>
        <button className="product-button">Cleaning</button>
        <button className="product-button">Eatables</button>
        <button className="product-button">HairCare</button>
        </div>
        {Beverages.map(createItem)}
        {Biscuits.map(createItem)}
        {BodyCare.map(createItem)}
        {Cleaning.map(createItem)}
        {Eatables.map(createItem)}
        {HairCare.map(createItem)}
        </div>
    )
}

export default Product;
export {handleClick};