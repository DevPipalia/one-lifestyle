import React from "react";
import Home from "./homepage/Home";
import Cart from "./cart_page/Cart";
import Offers from "./offers_page/Offers";
import Product from "./product_page/Product";
import About from "./about_page/About";
import { Link, NavLink,BrowserRouter, Route, Routes  } from "react-router-dom";

function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Product/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/offers" element={<Offers/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages;