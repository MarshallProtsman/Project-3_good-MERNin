import React from "react";
import Box from "@material-ui/core/Box";
import NavButton from "../components/navigationbutton/index";
import Grid from '@material-ui/core/Grid';

function homePage() {
    const imgURL = './img/splash.jpg';
    const style = {
        blurb: {
            padding: '2em',
            marginTop: '23%'
        },
        body: {
            backgroundImage: 'url(' + imgURL + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundPosition: 'left',
            height: '94vh',
            width: '100%',
            textAlign: 'left',
        }
        
    };

    return (
        <Box style={style.body}>
            <Grid container>
            <Grid item xs={1}></Grid>
                <Grid item lg={6} sm={12} xs={12} style={style.blurb}>
                    <h1 >Welcome to Immersio!</h1>
                    <p>Learn languages while you chat. Connect with your world.</p>
                    <br />
                    <NavButton to="/login" text="Login" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default homePage;