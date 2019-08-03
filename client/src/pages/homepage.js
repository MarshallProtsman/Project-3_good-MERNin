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
            textAlign: 'center',
        },
        gridContainer: {
            color: '#000000'
        },
        item: {
            padding: '3em'
        }

    };

    return (
        <Box>
            <Grid container spacing={3} style={style.gridContainer}>
                <Grid item md={6} style={style.item}>
                  
                </Grid>
                <Grid item md={6} style={style.item}>
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