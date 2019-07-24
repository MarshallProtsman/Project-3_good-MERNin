import React from "react";
import Box from "@material-ui/core/Box";
import LoginForm from "../components/loginform"

function loginPage() {
    return (
        <Box>
        <div className="#">Log-in Page</div>
        <LoginForm/>
        </Box>
        
    );
    //login form
    //username field
    //password field
    //submit button
}

export default loginPage;