import UserClass from "./UserClass"
import { Component } from "react"
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log("About Component Mounted");
    }

    render(){
        return(
            <div className="about">
                <h1>About Us Class Component</h1>
                <div>
                    
                        loggedIn User
                        <UserContext.Consumer>
                            {({loggedInUser})=>{
                                return <h2 className="text-xl font-bold">{loggedInUser}</h2>
                            }}
                        </UserContext.Consumer>
        
                </div>
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