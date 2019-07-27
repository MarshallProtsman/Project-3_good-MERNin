import React, { Component } from 'react';

class Message extends Component {
    render() {
        console.log(this.props.message);
        return (
            <div> { this.props.message.user } - { this.props.message.msgTarget } </div>
        )
    }
}

export default Message