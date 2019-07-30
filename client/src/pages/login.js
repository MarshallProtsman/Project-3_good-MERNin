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
            <br />
            <button onClick={this.props.appStateHandler}>setState (login = true)</button>
            </Box>
        )
    }
   
}

export default LoginPage;