import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Messenger from '../components/messenger';


class MessengerPage extends Component {
    render() {
        return (
            <Messenger user={ this.props.app.user } appStateHandler={ this.props.appStateHandler }/>
        )
    }

}

export default MessengerPage;