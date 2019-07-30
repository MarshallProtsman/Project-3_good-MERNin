import React, { Component } from 'react'
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import NavButton from "../navigationbutton";
import Button from "@material-ui/core/Button"

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

   onSubmit(event) {
     alert('Username: ' + this.state.name + " Password: " + this.state.password);
     event.preventDefault();
   }

  render() {
    return (
      <Box>
        <br />
        <form className="" onSubmit={this.onSubmit}>
          <TextField
            required
            id="standard-required"
            label="Name"
            className=""
            autoComplete="username"
            margin="normal"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            className=""
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
          <br />
        </form>
        <br />
        <NavButton to="/profile" text="temp Nav to profile" />
      </Box>
    )
  };
}