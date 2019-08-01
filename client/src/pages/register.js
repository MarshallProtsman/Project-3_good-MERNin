import React from "react";
import Box from "@material-ui/core/Box";
import RegisterForm from "../components/registerform";

function registerPage() {
    return (
        <Box>
            <br />
            <div className="#">Registration Page</div>
            <RegisterForm/>
        </Box>
    );
}

export default registerPage;