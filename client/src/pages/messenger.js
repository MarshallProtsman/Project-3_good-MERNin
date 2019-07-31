import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Messenger from '../components/messenger';


class MessengerPage extends Component {
    render() {
        return (
            <Messenger user={ this.props.app } appStateHandler={ this.props.appStateHandler }/>
        )
    }
}

export default MessengerPage;