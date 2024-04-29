import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [BtnName, setBtnName] = useState("Login");
    
    // if do no Dependency array => useEffect is called every time when the component is rendered.
    // if Dependency array is empty[] => useEffect is called only once when the component is mounted.
    // if Dependency array is [BtnName] => Called everytime BtnName is updated.
    useEffect(()=>{
        console.log("Header Component Mounted");
    }, [BtnName]);

    btnChange = ()=>{
        console.log("Button Clicked");
        return BtnName === "Login"? setBtnName("Logout") : setBtnName ("Login");    
    }

    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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