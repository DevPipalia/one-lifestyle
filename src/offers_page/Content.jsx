import React from "react";

function Content(props){
    return(
        <div className="content">
            <img className="offer-image" src={props.img}/>
            <h2 className="offer-text"> Get {props.percent}% off upto ₹{props.amount} </h2>
            <h2 className="offer-text"> on orders above {props.value}</h2>
            <h2 className="code-text">Use Code:{props.code}</h2>
            <h2 className="date-text ">Valid till:{props.date}</h2>
        </div>
    )
}

export default Content;