import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SimpleSelect from "../components/languageform"
import NavButton from "../components/navigationbutton"

class ProfilePage extends Component {
    render() {
        const imgStyle = {
            height: 200,
            width:  200
        };

        const styleButton = {
            width: 13 + 'em',
            fontSize: 0.88 + 'em',
            marginTop: 1 + 'em',
            color: 'white',
            background: 'orangered',
            padding: 0.22 + 'em',
            borderRadius: 10 + 'em'
        };

        console.log('App state passed as prop below...');
        console.log(this.props);

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
            <button onClick={this.props.appStateHandler} style={ styleButton }>Russian Agent Marshal</button>
            </Box>
        );
    };
};

export default ProfilePage;