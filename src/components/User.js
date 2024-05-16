import { useEffect, useState } from "react";
const User = (props)=>{
    const [count, useCount] = useState(0)
    const [count2, useCount2] = useState(1)

    useEffect(()=>{
        //Api Calls
    },[])

    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/ROHANKAPOOR007");
        const jsonData = await data.json();
            
    }

    return <div className="userCard">
        <h1>Count = {count}</h1>    
        <h1>Count2 = {count2}</h1>    
        <h2>Name: {props.name}</h2>
        <h3>Location: {props.Location}</h3>
        <h4>Contact: @Rohan_Kapoor007</h4>

    </div>
};

export default User;