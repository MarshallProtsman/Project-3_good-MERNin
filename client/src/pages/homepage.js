import React from "react";
import Box from "@material-ui/core/Box";
import NavButton from "../components/navigationbutton/index";
import Grid from '@material-ui/core/Grid';

function homePage() {
    const imgURL = './img/lady.jpg';
    const style = {
        blurb: {
            padding: '2em',
            marginTop: '13%'
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
        <Box >
            <Grid container spacing={3} style={style.gridContainer}>
                <Grid item md={4} style={style.item}>

                </Grid>
                <Grid item md={8} style={style.item}>
                    <div style={style.blurb}>
                        <h1>Get connected.</h1>
                        <h1>Be immersed.</h1>
                        
                        <br />
                        
                        <img src={imgURL}></img>
                    </div>
                </Grid>

            </Grid>
            <NavButton to="/login" text="Login" />
        </Box>

    );
}

export default homePage;