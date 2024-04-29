import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About.js";
import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";




// the Header component is inside AppLayout Component it is known as Component composition

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            About
        </div>
    )
}


const appRouter = Router([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error/>

    },
    {
        path: "/about",
        element: <About />,
        // errorElement: <Error/>

    },
    {
        path: "/contact",
        element: <h1>Contact Us</h1>,
        // errorElement: <Error/>
    },
    {
        path: "/cart",
        element: <h1>Cart</h1>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router = {appRouter}/>);