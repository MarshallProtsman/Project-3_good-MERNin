import React from 'react';
import Box from "@material-ui/core/Box"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import NavButton from "../navigationbutton"


export default function LoginForm() {

    function formSubmit() {
        alert("form was submitted!")
    }

  return (
      <Box>
          <br />
    <form className="" noValidate autoComplete="off">
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Name"
        className=""
        margin="normal"
      />
      <TextField
        required
        id="standard-password-input"
        label="Password"
        className=""
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <br />
      <Button onClick={formSubmit} variant="contained" color="primary">
      Submit
      </Button>
      <br />
        <NavButton to="/profile" text="temp Nav to profile"/>
    </form>
    </Box>
  );
}