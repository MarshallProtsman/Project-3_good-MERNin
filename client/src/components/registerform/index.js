import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Axios from 'axios';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",     
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);    
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(event) {
        
        event.preventDefault();
    

  render() {
      return(

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
                        value = {this.state.firstName}
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
                        value = {this.state.lastName}
                        onChange = {this.handleLastNameChange}

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
                    value = {this.state.email}
                    onChange = {this.handleEmailChange}
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
                    value = {this.state.password}
                    onChange = {this.handlePasswordChange}
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
                    value = {this.state.password2}
                    onChange = {this.handlePassword2Change}
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
}