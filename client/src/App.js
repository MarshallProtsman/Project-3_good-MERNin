import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/navbar";
import homePage from "./pages/homepage";
import loginPage from "./pages/login";
import messengerPage from "./pages/messenger";
import noMatchPage from "./pages/nomatch";
import profilePage from "./pages/profile";
import "./App.css";

function App() {
  return (
    <Container maxWidth="lg">
    <ButtonAppBar/>
      

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/login" component={loginPage} />
            <Route exact path="/profile" component={profilePage} />
            <Route exact path="/messenger" component={messengerPage} />
            <Route component={noMatchPage} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
