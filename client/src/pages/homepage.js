import React from "react";
import Box from "@material-ui/core/Box";
import NavButton from "../components/navigationbutton/index";

function homePage() {
    return (
        <Box>
        <br />
        <div className="#">Welcome to Immersio!</div>
        <br />
        <NavButton onClick=() text="Login Here"/>
        </Box>
    );

    //log in button
}

export default homePage;