import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Messenger from '../components/messenger';


class MessengerPage extends Component {
    render() {
        return (
            <Messenger app={this.props}/>
        )
    }

}

export default MessengerPage;