import React from "react";
import Box from "@material-ui/core/Box";
import NavButton from "../components/navigationbutton/index";

function homePage() {
    return (
        <Box>
        <br />
        <div className="#">Welcome to Immersio!</div>
        <br />
            <NavButton to="/register" text="Register Here"/>
            <br />
            <NavButton to="/login" text="Login Here"/>
        </Box>
    );
}

export default homePage;