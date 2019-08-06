import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButtonAppBar from "./components/navbar";
import homePage from "./pages/homepage";
import LoginPage from "./pages/login";
import MessengerPage from "./pages/messenger";
import ProfilePage from "./pages/profile";

// testing sandbox below
import Sandbox from "./pages/sandboxUI";
import "./App.css";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';

import Fade from 'react-reveal/Fade';

const font = 'Montserrat';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255,255,255, 0)'
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: font
  },
  shadows: ["none"]
});

class App extends Component {
  constructor() {
    super(); // needed for this keyword

    // state is the user at within app state 
    this.state = {
      name: 'Bert',
      email: 'jrobertson@gmail.com',
      id: 1222022,
      native: 'en',
      target: 'es',
      img: 'url-goes-here',
    };
  };

  // handles updating app state from args passed from child
  handler = (name, native, target, email, id) => {
    this.setState({
      name: name,
      native: native,
      target: target,
      email: email,
      id: id
    });
    console.log(this.state);
  }

  render() {
    return (
      <ThemeProvider theme={theme} className="App">
        <Fade clear delay={2400}>
          <ButtonAppBar />
         
        </Fade>

        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={homePage} />
              <Route exact path="/login" render={() => <LoginPage app={this.state} appStateHandler={this.handler}/>} />
              <Route exact path="/profile" render={() => <ProfilePage app={this.state} appStateHandler={this.handler} />} />
              <Route exact path="/messenger" render={() => <MessengerPage app={this.state} />} />
              {/* sandbox testing below for material UI */}
              <Route component={Sandbox} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
