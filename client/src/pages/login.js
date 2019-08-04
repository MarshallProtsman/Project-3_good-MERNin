import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";




class LoginPage extends Component {
    render() {
        return (
            <Box style={{height: '100vh'}}>
            
                        <LoginForm />
                        
            </Box>
        );
    };
};

export default LoginPage;