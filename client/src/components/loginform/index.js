import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      redirect: false
    };
  }

  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to= '/messenger' />
    }
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmit = (event) => {
    //alert('Username: ' + this.state.name + " Password: " + this.state.password);
    event.preventDefault();
    console.log(`User: ${this.state.name} Password: ${this.state.password}`);
    Axios({
      method: "POST",
      url: "/userLogin",
      data: {
        userName: this.state.name,
        password: this.state.password
      }
    })
      .then(response => {
        if (response.data.name === undefined) {
          this.setState({
            name: 'Invalid User',
            password: ''
          });
          console.log(this.state)
        } else {
          this.props.updateState(response.data.name, response.data.nativeLanguage, response.data.targetLanguage, response.data.email, response.data._id);
          console.log(response);
          this.setState({
            redirect: true
          })
          this.renderRedirect();
        }
      }
      )
  }

  render() {
    console.log(this.props.updateState)
    return (

      <Container style={{ paddingTop: '10em' }}>
      {this.renderRedirect()}
      
        <Grid container spacing={6}>
          <Grid item lg={3} sm={3} ></Grid>
          
          <Grid item lg={6} sm={6} xs={12} >
            <form className="" onSubmit={this.onSubmit}>
              <div>
                <TextField style={{ width: '100%' }}
                  required
                  id="standard-required"
                  label="Name"
                  className=""
                  autoComplete="username"
                  margin="normal"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div>
                <TextField style={{ width: '100%' }}
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
                
              </div>
              <br />
              <Button type="submit" variant="contained" color="primary">Login</Button>
              <br />
            </form>
            <br />
          </Grid>
          
          <Grid item lg={3} ></Grid>
        </Grid>
        
      </Container>
      
    );
  };
}

export default LoginForm