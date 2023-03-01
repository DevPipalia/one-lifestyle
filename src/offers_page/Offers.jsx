import React, { createElement } from "react";
import Navbar from "../homepage/Navbar";
import Content from "./Content";
import data from "./data";

function Element(dataitem)
{
 return(
    <Content 
    key={dataitem.id}
    img={dataitem.img}
    percent={dataitem.percent}
    amount={dataitem.amount}
    value={dataitem.value}
    code={dataitem.code}
    date={dataitem.date}
    />
 )
}




function Offers(){
    return(
        <div>
        <Navbar/>
        
        {data.map(Element)}
        </div>
    )
}

export default Offers;