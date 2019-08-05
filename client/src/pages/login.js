import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NavButton from "../components/navigationbutton";
import Button from '@material-ui/core/Button';




class LoginPage extends Component {

    // AJAX request to fetch User info from dB


    // pass user info from db into updateParent function
    updateParent = () => {
        // replace the values of each var with the response from db
        let name = 'Mr. Database';
        let native = 'en';
        let target = 'ru';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128943;

        // this fires off to update the app state as a callback
        this.props.appStateHandler(name, native, target, email, id);
        // then once state is updated we re-route to messenger page
    };

    render() {
        console.log(this.props)
        return (
            <Box style={{ height: '100vh' }}>
                <LoginForm />

                <Button onClick={this.updateParent}>Update</Button>
                <NavButton to="/messenger" text="Start Chatting!" />
            </Box>
        );
    };
};

export default LoginPage;