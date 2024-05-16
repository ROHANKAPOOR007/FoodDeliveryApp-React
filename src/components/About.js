import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("About Component Mounted");
    }

    render(){
        return(
            <div className="about">
                <h1>About Us Class Component</h1>
                <h2>This is Namaste React Webseries</h2>
                {/* <User name = {"Rohan Kapoor (Function)"} Location={"Ghaziabad"} /> */}
    
                <UserClass name={"Rohan Kapoor (Class Component)"} Location={"Ghaziabad"}/>
            </div>
        ) 
    }
}
// const About = ()=>{
//     return(
//         <div className="about">
//             <h1>About Us</h1>
//             <h2>This is Namaste React Webseries</h2>
//             <User name = {"Rohan Kapoor (Function)"} Location={"Ghaziabad"} />

//             <UserClass name={"Rohan Kapoor (Class)"} Location={"Ghaziabad"}/>
//         </div>
//     )
// }

export default About