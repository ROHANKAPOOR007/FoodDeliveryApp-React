import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {
            name: "dummy",
            location: "Default",
            
        }
    }

  }

  async componentDidMount(){
    // API Call
    const data = await fetch("https://api.github.com/users/ROHANKAPOOR007");
    const jsonData = await data.json();

    this.setState({
        userInfo: jsonData,
    })


    console.log(jsonData);
  }


  componentDidUpdate(){
    console.log("Component Updated");
  }


  componentWillUnmount(){
    console.log("Component UnMounted");
  }

  render() {

    const {name, login, bio, location, avatar_url} = this.state.userInfo;
    return (
      <div className="userCard">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;


/*
----- Mounting Life Cycle -----
    - Constructor is called
    - render is called (Dummy data)
    - <HTML> has Dummy data</HTML>
    - componentDidMount is called
        - <API Call>
        - <this.setState> => State variable is updated

----- Updating Life Cycle -----
    - render is called (API Data)
    - <HTML> has( API Data )
    - Called ComponentDidUpdate()



*/