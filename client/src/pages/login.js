import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform"



class LoginPage extends Component {
    render() {
        return (
            <Box>
            <br />
            <div className="#">Log-in Page</div>
            <LoginForm/>
            </Box>
        )
    }
   
}

export default LoginPage;