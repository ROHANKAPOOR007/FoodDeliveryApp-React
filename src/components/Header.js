import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [BtnName, setBtnName] = useState("Login");


    
    // if do no Dependency array => useEffect is called every time when the component is rendered.
    // if Dependency array is empty[] => useEffect is called only once when the component is mounted.
    // if Dependency array is [BtnName] => Called everytime BtnName is updated.
    // useEffect(()=>{
    //     console.log("Header Component Mounted");
    // }, [BtnName]);


    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser)

    btnChange = ()=>{
        // console.log("Button Clicked");
        return BtnName === "Login"? setBtnName("Logout") : setBtnName ("Login");    
    }


    // We are Subscribing to the Store using Selector
    // Selector is a hook inside the react-redux
    // This hook is gives us access to our store
    const cartItems = useSelector((store)=>{
        return store.cart.items
    })


    return(
        <div className="flex justify-between bg-blue-300 shadow-lg m-2">

            <div className="logo-container">
                <Link to="/"><img className="w-64" src={LOGO_URL} alt="" /> </Link>
            </div>

            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-3"> <Link to="/"> Home </Link> </li>
                    <li className="px-3"> <Link to="/about"> About Us </Link> </li>
                    <li className="px-3"> <Link to="/contact"> Contact Us </Link> </li>
                    <li className="px-3"> <Link to="/grocery"> Grocery </Link> </li>
                    <li className="px-3 font-bold"><Link to="/cart"> Cart - ({cartItems.length} Items) </Link> </li>

                    <button 
                        className="loginButton" 
                        onClick={btnChange}
                    >
                        {BtnName}
                    </button>

                    <li className="px-3 font-bold"> {loggedInUser} </li>


                </ul>
            </div>
        </div>
    )
}

export default Header;