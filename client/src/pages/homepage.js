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
        },
        bigText: {
            fontSize: '3em',
            color: '#EB8258'
        },
        scroll: {
            alignText: 'left',
            color: 'red',
        }
    };

    return (
        <Box >
            <Grid container spacing={3} style={style.gridContainer}>
                <Grid item md={4} xs={12} style={style.item}>
                <br />
                </Grid>
                <Grid item md={8} xs={12} style={style.item}>
                    <div style={style.blurb}>
                        <h1 style={style.bigText} >Get connected.  Be immersed.</h1>
                        <br />
                        <img src={imgURL}></img>
                    </div>
                </Grid>
</Grid>
                <Grid container spacing={3}>
                <Grid item md={6} style={style.item}>
                <h5>Language translation chat app. 
                    Powered by Google, Socket.io, and MERN.
                    </h5>   
                <p>Connect with your world with Immersio.  </p>
                </Grid>
            </Grid>
            <NavButton to="/login" text="Login" />
        </Box>

    );
}

export default homePage;