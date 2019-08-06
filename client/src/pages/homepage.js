import React, { Component } from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from '@material-ui/core';
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Link } from 'react-router-dom';  
import Fade from 'react-reveal/Fade';


class Sandbox extends Component {

    render() {

        const imgURL = './img/lady.jpg';
        const person1 = './img/person1.jpg';
        const style = {
            page: {
                paddingTop: '6em'
            },
            sectionOne: {
                backgroundImage: 'url(' + imgURL + ')',
                backgroundSize: '800px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundPosition: 'right',
                height: '94vh',
                width: '100%',
                paddingTop: '16%'
            },
            sectionTwo: {
                marginTop: '10em',
                // background: '#000000'
            },
            textBig: {
                fontSize: '2.66em',
                color: '#E5E5E5 ',
                background: '#DB504A',
                padding: '0.11em',
            },
            textBlock: {
                marginBottom: '-2em',
            },
            scroll: {
                position: 'absolute',
                bottom: '3em',
                opacity: 0.26,
                transform: 'rotate(90deg)',
                zIndex: 20
            },
            button: {
                border: '1px solid #80CED7',
                background: '#80CED7',
                width: '10em',
                margin: '1em'
            },
            sectionThree: {
                height: '66vh',
            },
            sectionFour: {
                backgroundColor: '#000000',
                color: '#ffffff',
                textAlign: 'center',
                height: '70vh',
                paddingTop: '12%'
                
            }
        }

        return (
            <Box style={style.page}>

                <p style={style.scroll}>S C R O L L</p>
                <Fade clear delay={200}>

                    <Container style={style.sectionOne}>
                        <BlockRevealAnimation delay={1} color="#80CED7">
                            <Typography>
                                <h1 style={{ opacity: 0.33 }}>Bonjour.</h1>
                            </Typography>
                        </BlockRevealAnimation>
                        <br />

                        <Grid container spacing={6}>
                            <Grid item md={2} xs={2}>
                            </Grid>
                            <Grid item md={10}>
                                {/* <Typography > */}
                                <div style={style.textBlock}>
                                    <BlockRevealAnimation delay={1.66} color="#ffffff" duration={1.66}>
                                        <h1 style={style.textBig}>Learn a new language.</h1>
                                    </BlockRevealAnimation>
                                </div>

                                <div style={style.textBlock}>
                                    <BlockRevealAnimation delay={1.99} color="#ffffff" duration={1.33}>
                                        <h1 style={style.textBig}>Connect with your world.</h1>
                                    </BlockRevealAnimation>
                                </div>
                                <div style={style.textBlock}>
                                    <BlockRevealAnimation delay={2.22} color="#ffffff" >
                                        <h1 style={style.textBig}>Stay Immersed.  </h1>
                                    </BlockRevealAnimation>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>

                <Grid container spacing={3} style={style.sectionTwo}>
                    <Grid item md={2}></Grid>
                    <Grid item md={6} style={{ padding: '4em' }}>

                        <Fade clear >
                            <h1>Welcome to Immersio.</h1>
                            <Typography style={{ fontSize: '1.11em' }}>
                                <p>Immersion has been proven to be the most effective way to learn a new language.
                                    What better way to to learn than while talking with friends and family?</p>
                                <p>Immersio does just that.  Users to chat in real time, displaying their messages in their target langauge.</p>
                                <p>Messages can calso be toggled to show the translated message in the user's native language.</p>
                                <p>Available languages include English, Spanish, French, and Italian.</p>
                            </Typography>
                        </Fade>

                        {/* login button */}
                        <Fade up>
                            <Typography>
                                <Link to="/login"> <button type="button" style={style.button} >
                                    <h3>L O G I N</h3>
                                </button>
                                </Link>
                            </Typography>
                        </Fade>
                    </Grid>
                </Grid>

                {/* fullwidth image */}
                <div style={{ marginTop: '10em' }}>
                    <Fade clear>
                        <img src={person1}></img>
                    </Fade>
                </div>

                <div style={style.sectionThree} >
                    <Grid container spacing={6} style={{ marginTop: '10em' }}>
                        <Grid item md={2}></Grid>
                        <Grid item md={5}>
                            <Fade clear >
                                <h1>About the App</h1>
                                <Typography style={{ fontSize: '1.11em' }}>
                                    <p>Immersio is built with the MERN stack.</p>
                                    <p>The backend leverages Node and Express to serve assets.</p>
                                    <p>The frontend is powered by React.</p>
                                    <p>Instant messaging is a Socket.io implementation that leverages Google Translation Cloud API.</p>
                                </Typography>
                            </Fade>
                        </Grid>

                    </Grid>
                </div>

                <div style={style.sectionFour}>
                    <Grid container spacing={6}  >
                        <Grid item md={2}></Grid>
                        <Grid item md={8}>
                            <Fade clear >
                            
                            
                                <h1>Meet the Team</h1>
                                <Typography style={{ fontSize: '1.11em' }}>
                                   <h3>The developers that make it happen.</h3>
                                </Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        )
    }

}

export default Sandbox