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