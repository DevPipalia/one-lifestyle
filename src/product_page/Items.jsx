import React from "react";
import { handleClick } from "./Product";

function Items(props){
    return(
        <div className="item-container">
            <img className="item-image" src={props.img} />
            <h2 className="item-name">Name: {props.name}</h2>
            <h2 className="item-price"> Price: {props.price} </h2>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default Items;