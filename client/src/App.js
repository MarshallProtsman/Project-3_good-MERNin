import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./pages/homepage";
import LoginPage from "./pages/login";
import MessengerPage from "./pages/messenger";
import ProfilePage from "./pages/profile";
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Fade from 'react-reveal/Fade';

const font = 'Montserrat';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255,255,255, 0)'
    }
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
    // maintain user in app state to access in all components
    this.state = {
      name: 'Demo',
      email: 'jrobertson@gmail.com',
      id: 1222022,
      native: 'en',
      target: 'es',
      img: 'url-goes-here',
    };
  };

  // handles updating app state from args passed from child - critical!
  handler = (name, native, target, email, id) => {
    this.setState({
      name: name,
      native: native,
      target: target,
      email: email,
      id: id
    });
    console.log(this.state); // log updates to state (user)
  };

  render() {
    return (
      <ThemeProvider theme={theme} className="App">
        <Fade clear delay={800}>
        </Fade>

        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={homePage} />
              <Route exact path="/login" render={() => <LoginPage app={this.state} appStateHandler={this.handler}/>} />
              <Route exact path="/profile" render={() => <ProfilePage app={this.state} appStateHandler={this.handler} />} />
              <Route exact path="/messenger" render={() => <MessengerPage app={this.state} />} />
            </Switch>
          </div>
        </Router>

      </ThemeProvider>
    )
  }
}

export default App;
