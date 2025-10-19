import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }

    render(){
        //console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1> 
                <h2>This is React</h2>
                <UserClass name={"First"} location={"Muzaffarpur class"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About page</h2>
//             <UserClass name={"Abhilasha Dwivedi(class)"} location={"Muzaffarpur class"}/>
//         </div>
//     );
// };

export default About;