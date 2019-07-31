import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Messenger from '../components/messenger';


class MessengerPage extends Component {
    render() {
        return (
            <Box>
            <Messenger user={this.props.user}/>
            </Box>
        )
    }

}

export default MessengerPage;