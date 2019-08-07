import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade';

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
    };
 
    render() {
        console.log(this.props);
        return (
            <Box style={{ height: '90vh', width: '100%' }}>
            <br />
            <Fade clear delay={400}>
                <LoginForm updateState={this.props.appStateHandler}/>
                
                <Grid container spacing={2}>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6} sm={12} style={{ textAlign: 'center', paddingTop: '5%' }}>
                    </Grid>
                </Grid>
                </Fade>
            </Box>
        );
    };
};

export default LoginPage;