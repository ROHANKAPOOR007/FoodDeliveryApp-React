import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About.js";
import { createBrowserRouter as Router, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


// the Header component is inside AppLayout Component it is known as Component composition

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />

        </div>
    )
}


const appRouter = Router([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
        
            },
            {
                path: "/contact",
                element: <h1>Contact Us</h1>,
            },
            {
                path: "/cart",
                element: <h1>Cart</h1>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,

            }
        ],
        errorElement: <Error/>

    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router = {appRouter}/>);