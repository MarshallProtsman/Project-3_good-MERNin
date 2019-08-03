import React, { Component } from 'react';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

class Sandbox extends Component {
    render() {
const gridItem = {
    border: '1px solid grey',
    padding: '0.11em'
}

        return (
            
            <Container fixed>
            <Grid container>
                    <Grid item xs={12} md={4} style={gridItem}>
                        hello
                    </Grid>
                    <Grid item xs={12} md={4} style={gridItem}>
                        hello
                    </Grid>
                    <Grid item xs={12} md={4} style={gridItem}>
                        hello
                    </Grid>
                </Grid>

            </Container>
              
           
            


        )
    }
}

export default Sandbox