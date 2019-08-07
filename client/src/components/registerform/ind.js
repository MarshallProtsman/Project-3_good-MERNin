import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import classes from "./module.css"
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { tsConstructorType } from "@babel/types";


export default function Register() {

    constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""};

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);

    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handlePassword2Change(event) {
        this.setState({password2: event.target.value});
    }
    

    
    return (
        <Container component = "main" maxwidth = "xs">
            <CssBaseline />
            <Typography component = "h1" variant = "h5">
                Register Your Account
            </Typography>
            <form className="" onSubmit={this.onSubmit}>
                <Grid container spacing = {2}>
                    <Grid item xs = {12} sm = {6}>
                        <TextField
                            autoComplete="firstname"
                            name = "firstName"
                            variant = "outlined"
                            required
                            fullWidth
                            id = "firstName"
                            label = "First Name"
                            autoFocus
                            onChange = {this.handleFirstNameChange}
                            />
                        </Grid>
                    <Grid item xs = {12} sm = {6}>
                        <TextField
                            autoComplete="lastname"
                            name = "lastName"
                            variant = "outlined"
                            required
                            fullWidth
                            id = "lastName"
                            label = "Last Name"
                            onChange = {this.handleFirstNameChange}
                        />
                </Grid>
                <Grid item sx = {12}>
                    <TextField
                        variant = "outlined"
                        required
                        fullWidth
                        id = "email"
                        label = "Email Address"
                        name = "email"
                        autoComplete = "email"
                        />
                </Grid> 
                <Grid item sx = {12}>
                    <TextField
                        variant = "outlined"
                        required
                        fullWidth
                        id = "password"
                        label = "Password"
                        type = "password"
                        name = "password"
                        autoComplete = "current-password"
                        />
                </Grid> 
                <Grid item sx = {12}>
                    <TextField
                        variant = "outlined"
                        required
                        fullWidth
                        id = "password2"
                        label = "Re-Enter Password"
                        type = "password"
                        name = "password2"
                        autoComplete = "current-password"
                        />
                </Grid> 
                <Button
                    type = "submit"
                    fullWidth
                    variant = "contained"
                    color = "primary"
                  >
                    Sign Up
                </Button>
                <Grid container justify = "flex-end">

                </Grid>
                </Grid>
                
            </form>
        </Container>
    );
}

//needs button to log in page added in case they already have an acc