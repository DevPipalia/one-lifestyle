import React from "react";
import { ReactDOM, } from "react";
import Home from "./homepage/Home";
import Cart from "./cart_page/Cart";
import Offers from "./offers_page/Offers";
import Product from "./product_page/Product";
import About from "./about_page/About";
import BeveragePage from "./product_page/Beverage";
import BiscuitsPage from "./product_page/Biscuits";
import { Link, NavLink,BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider  } from "react-router-dom";

function Pages(){
    const router=createBrowserRouter([
        {
            path:"/" ,
            element:<Home/>
        },
        {
            path:"/about" ,
            element:<About/>
        },
        {
            path:"/offers" ,
            element:<Offers/>
        },
        {
            path:"/cart" ,
            element:<Cart/>
        },
        {
            path:"/products",
             element:<Product/>
        }

    ])

    return(
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home/>} />
        //         <Route path="/about" element={<About/>} />
        //         <Route path="/offers" element={<Offers/>} />
        //         <Route path="/cart" element={<Cart/>} />
        //         <Route path="/products" element={<Product/>}>
        //             <Route path="beverages" element={<BeveragePage/>}/>
        //             <Route path="biscuits" element={<BiscuitsPage/>}/>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>

        ReactDOM.createRoot(document.getElementById("root")).render(
            <RouterProvider router={router} />
          )

       
    )
}

export default Pages;