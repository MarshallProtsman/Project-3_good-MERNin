import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";
import Box from "@material-ui/core/Box";

class Message extends Component {
  constructor(props) {
    super(props);

    this.user = {
      name: this.props.user.name,
      email: this.props.user.email,
      id: this.props.user.id,
      native: this.props.user.native,
      target: this.props.user.target,
      img: this.props.user.img
  };

    this.state = {
      message: "",
      messageList: [],
      isHidden: true
    };

    return (
      <div className="Message" style={Message}>
        {this.state.messageList.map(message => {
          console.log(message.user.id);
          let msgStyle = {};
          if (message.user.id === this.user.id) {
            msgStyle = msgUser;
          } else {
            msgStyle = msgFriend;
          }
          return (
            <Box>
              <div
                style={msgStyle}
                key={message.key}
                data-message={message.message}
                data-translation={message.translation}
                >
                <Button onClick={this.toggleMessage} key={message.key}>
                  {this.state.isHidden
                    ? 
                  ( <p>
                      {message.user.name} : {message.translation}
                    </p>)
                    :
                    (<p>
                      {message.user.name} : {message.key} {message.message}
                    </p>)}
                </Button>
              </div>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default Message;