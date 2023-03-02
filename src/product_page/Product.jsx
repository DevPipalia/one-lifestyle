import React from "react";
import Navbar from "../homepage/Navbar";
import Items from "./Items";
import ItemsData from "./ItemsData";

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
        {ItemsData.map(createItem)}
        </div>
    )
}

export default Product;
export {handleClick};