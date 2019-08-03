import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";



class LoginPage extends Component {
    render() {
        return (
            <Box style={{ background: 'black', height: '94vh' }}>
                <Grid container>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>  
                     <div className="#" >Log-in Page</div>
                        <LoginForm />
                    </Grid>
                    <Grid item lg={4}></Grid>
                </Grid>
            </Box>
        );
    };
};

export default LoginPage;