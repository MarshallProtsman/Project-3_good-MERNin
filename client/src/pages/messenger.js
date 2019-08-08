import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Messenger from "../components/messenger";
import Navbar from "../components/navbar";

class MessengerPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Box>
          <Messenger
            user={this.props.app}
            appStateHandler={this.props.appStateHandler}
          />
        </Box>
      </div>
    );
  }
}

export default MessengerPage;
