import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/navbar";
import homePage from "./pages/homepage";
import loginPage from "./pages/login";
import MessengerPage from "./pages/messenger";
import noMatchPage from "./pages/nomatch";
import profilePage from "./pages/profile";
import "./App.css";


class App extends Component {
  state = {
    user: {
      userName: 'john',
      userEmail: 'john@gmail.com',
      userID: 332002,
      langNative: 'en',
      langTarget: 'es',
      friends: [],
      threads: []
    }
  };
  
  render() {
    return (
      <div>
      <ButtonAppBar/>
        
      <Container>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={homePage} />
              <Route exact path="/login" component={loginPage} />
              <Route exact path="/profile" component={profilePage} />
              <Route exact path="/messenger" render={() => <MessengerPage app={ this.state } />} />
              <Route component={noMatchPage} />
            </Switch>
          </div>
        </Router>
        </Container>
      </div>
    )
    
  }
}

export default App;
