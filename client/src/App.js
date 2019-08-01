import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/navbar";
import homePage from "./pages/homepage";
import loginPage from "./pages/login";
import MessengerPage from "./pages/messenger";
import noMatchPage from "./pages/nomatch";
import ProfilePage from "./pages/profile";
import registerPage from "./pages/register"
import "./App.css";

class App extends Component {
  // state is the user at within app state 
  state = {
      name: 'john',
      email: 'john@gmail.com',
      id: 7062261217,
      native: 'en',
      target: 'fr',
      img: 'url/picture',
      friends: [],
      threads: []
  };
  
  render() {    
    return (
      <div>
      <ButtonAppBar />
      <Container>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={homePage} />
              <Route exact path="/login" component={loginPage} />
              <Route exact path="/register" component={registerPage} />
              <Route exact path="/profile" render={() => <ProfilePage user={ this.state } />} />
              <Route exact path="/messenger" render={() => <MessengerPage user={ this.state } />} />
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
