import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SimpleSelect from "../components/languageform"
import NavButton from "../components/navigationbutton"

function profilePage() {
    var imgStyle = {
        height: 200,
        width:  200
    }

    return (
        <Box>
        <br />
        <div className="#">Profile Page</div>
        <br />
        <div>User name goes here</div>
        <br />
        <img src="#" alt="user face" style={imgStyle}/>
        <br />
        <SimpleSelect/>
        <br />
        <NavButton to="/messenger" text="Start Chatting!"/>
        </Box>
    );
}

export default profilePage;

// class ProfilePage extends Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>hi</h1>
//             </div>
//         )
//     }

// }

// export default ProfilePage;