import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About.js";
import { createBrowserRouter as Router, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Contact from "./components/Contact.js";
// import Grocery from "./components/Grocery.js";


// Chunking
// Code Slpitting
// Dynamic Bundling

// Lazy Loading
// OnDemand Loading
// Dynamic Import

const Grocery = lazy(()=>{ return import("./components/Grocery.js")});

const About = lazy(()=>{ return import("./components/About.js")});


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
                element: <Suspense fallback={<h1>About Us</h1>}>
                    <About />
                </Suspense>,
        
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading . . .</h1>}> 
                    <Grocery /> 
                </Suspense>,
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