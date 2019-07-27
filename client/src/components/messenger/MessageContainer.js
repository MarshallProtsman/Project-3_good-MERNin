import React, { Component } from 'react';
import Message from './Message'

class MessageContainer extends Component {
    render() {
        console.log(this.props);
        return this.props.messages.map( (message) => 
                <Message message={ message } key={ message.id } />
            )
    }
}

export default MessageContainer