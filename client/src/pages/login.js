import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform";
import NavButton from "../components/navigationbutton";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";


class LoginPage extends Component {
    style = {
        button: {
            background: '#000000',
            color: '#ffffff',
            borderRadius: '0em',
            margin: '0 2em 1em 0',
            width: '6em',
            fontSize: '1.11em'
        }

    }
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

    // USER DEMOS
    updateJohn = () => {
        let name = 'John';
        let native = 'en';
        let target = 'es';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128922;
        this.props.appStateHandler(name, native, target, email, id);
    };
    updateDavid = () => {
        let name = 'David';
        let native = 'en';
        let target = 'it';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128942;
        this.props.appStateHandler(name, native, target, email, id);
    };
    updateChaney = () => {
        let name = 'Chaney';
        let native = 'en';
        let target = 'fr';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128945;
        this.props.appStateHandler(name, native, target, email, id);
    };
    updateMarshall = () => {
        let name = 'Marshall';
        let native = 'en';
        let target = 'ru';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128949;
        this.props.appStateHandler(name, native, target, email, id);
    };

    render() {
        console.log(this.props)
        return (
            <Box style={{ height: '100vh' }}>

            <br />
                <LoginForm />
                <Grid container spacing={2}>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6} sm={12} style={{ textAlign: 'center', paddingTop: '5%' }}>
                        {/* <Button style={this.style.button} onClick={this.updateParent}>Update</Button> */}
                        <Button style={this.style.button} onClick={this.updateJohn}>John</Button>
                        <Button style={this.style.button} onClick={this.updateDavid}>David</Button>
                        <Button style={this.style.button} onClick={this.updateChaney}>Chaney</Button>
                        <Button style={this.style.button} onClick={this.updateMarshall}>Marshall</Button>
                        
                        <NavButton to="/messenger" text="Start Chatting!" />
                    </Grid>
                </Grid>

            </Box>
        );
    };
};

export default LoginPage;