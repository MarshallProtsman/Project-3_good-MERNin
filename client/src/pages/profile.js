import React from "react";
import Box from "@material-ui/core/Box";
import SimpleSelect from "../components/languageform"

function profilePage() {
    var imgStyle = {
        height: 200,
        width:  200
    }

    return (
        <Box>
        <br />
        <div className="#">Profile Page</div>
        <br />
        <div>User name goes here</div>
        <br />
        <img src="#" alt="user face" style={imgStyle}/>
        <br />
        <SimpleSelect/>
        </Box>
    );
}

export default profilePage;