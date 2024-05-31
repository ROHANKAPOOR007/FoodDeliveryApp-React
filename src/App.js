import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About.js";
import { createBrowserRouter as Router, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Contact from "./components/Contact.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
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

    

    const [userName, setUserName] = useState();
    // Authentication
    useEffect(()=>{
    // Make an API call and send the username and password.
        const data = {
            name: "Rohan Kapoor",

        };

        setUserName(data.name)
    }, [])


    return(
        // react-redux
        <Provider store={appStore}>

            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>

                <div className="app">
                    <Header />
                    <Outlet />

                </div>

            </UserContext.Provider>
            
        </Provider>
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
                element: <Cart/>
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