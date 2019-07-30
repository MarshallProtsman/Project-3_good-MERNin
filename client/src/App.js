import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/navbar";
import homePage from "./pages/homepage";
import LoginPage from "./pages/login";
import MessengerPage from "./pages/messenger";
import noMatchPage from "./pages/nomatch";
import ProfilePage from "./pages/profile";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // binds the handler function to the app state to manage users across pages
    this.handler = this.handler.bind(this);
  }

  handler(user) {
    this.setState({
      login: true
    });
    console.log('setting app state')
  }
  // state is the user at within app state 
  state = {
    login: false,
    user: {
      name: 'john',
      email: 'john@gmail.com',
      id: 7062261217,
      native: 'en',
      target: 'fr',
      img: 'url/picture',
      friends: [],
      threads: [],
    }

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
                <Route exact path="/login" render={() => <LoginPage userHandler={this.handler} />} />
                <Route exact path="/profile" render={() => <ProfilePage app={this.state} />} />
                <Route exact path="/messenger" render={() => <MessengerPage app={this.state} appStateHandler={this.handler} />} />
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
