import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    const [BtnName, setBtnName] = useState("Login");

    
    // if do no Dependency array => useEffect is called every time when the component is rendered.
    // if Dependency array is empty[] => useEffect is called only once when the component is mounted.
    // if Dependency array is [BtnName] => Called everytime BtnName is updated.
    // useEffect(()=>{
    //     console.log("Header Component Mounted");
    // }, [BtnName]);


    const onlineStatus = useOnlineStatus();

    btnChange = ()=>{
        // console.log("Button Clicked");
        return BtnName === "Login"? setBtnName("Logout") : setBtnName ("Login");    
    }

    return(
        <div className="header">

            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL} alt="" /> </Link>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About Us </Link> </li>
                    <li> <Link to="/contact"> Contact Us </Link> </li>
                    <li> <Link to="/grocery"> Grocery </Link> </li>
                    <li>Cart</li>

                    <button 
                        className="loginButton" 
                        onClick={btnChange}
                    >
                        {BtnName}
                    </button>

                </ul>
            </div>
        </div>
    )
}

export default Header;