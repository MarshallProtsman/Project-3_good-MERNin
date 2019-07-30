import React, { Component } from 'react';
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
  
        // pass in from props (app - dynamic user info would replace hardcoded info below!!!)
        this.user = {
            name: this.props.user.name,
            email: this.props.user.email,
            id: this.props.user.id,
            native: this.props.user.native,
            target: this.props.user.target,
            img: this.props.user.img
        };

        // state only needs to be maintained for the chat input and messages list
        this.state = {
            message: '',
            messageList: [],
            isHidden : true
        };

        // pass the user profile to server to add to socket/client instance
        this.socket = io('localhost:5000', { query: this.user}, function() {
            console.log(io)
        });

        // on message receipt from server - add to state thru the addMessage call
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data); // pushes to messages array
            console.log(data); // log message from server
        });

        
        // add message to thread (state array) on receipt from server (translated)
        const addMessage = data => {
            data.key = this.state.messageList.length; // adds key to message based on messages array length
            this.setState({ messageList: [...this.state.messageList, data] });
        }

        // send message to server for translation and relay
        this.sendMessage = ev => {
            ev.preventDefault(); // don't be yourself

            const input = document.getElementById('messageInput'); // grab input element 

            // prevents blank message submission, others sends to server
            if (this.state.message === '') {
                input.placeholder = 'Message body cannot be empty...';
            } else {
                this.socket.emit('SEND_MESSAGE', {
                    message: this.state.message,
                    user: this.user
                });
                // reset the message state to clear
                this.setState({
                    message: ''
                });
                input.placeholder = 'Message'; // reset input placeholder on message send
            };
        };

        // send message on 'Enter' key press
        this.keyPress = ev => {
            // console.log(ev.key); 
            if (ev.key === 'Enter') {
                this.sendMessage(ev);
            }
        };
    }



    render() {
        // style declarations
        const styleBody = {
            textAlign: 'center',
            padding: '10%',
            fontSize: 1 + 'em'
        };

        const styleInput = {
            fontSize: 1 + 'em',
            marginBottom: 0.33 + 'em',
            border: '1px solid lightgrey',
            padding: 0.33 + 'em',
            width: '66%'
        };

        const styleButton = {
            width: 4 + 'em',
            fontSize: 0.88 + 'em',
            marginTop: 1 + 'em',
            color: 'white',
            background: 'orangered',
            padding: 0.22 + 'em',
            borderRadius: 10 + 'em'
        };

        const Messages = {
            padding: 0.33 + 'em',
            minHeight: 1 + 'em',
            margin: 0.33 + 'em'
        };

        const msgUser = {
            opacity: 0.66,
            textAlign: 'right'
        };

        const msgFriend = {
            textAlign: 'left'
        };

        return (
            <div style={styleBody}>
                <h1>Immersio Chat</h1>
                <h3>IM Chat for Immersive Language Learning</h3>
                
                <div className="Messages" style={Messages}>
                    {this.state.messageList.map(message => {
                        let msgStyle = {};
                        if (message.user.id === this.user.id) {
                            msgStyle = msgUser;
                        } else {
                            msgStyle = msgFriend;
                        }
                        return (
                            <div onClick={toggleMessage} style={msgStyle} key={message.key} data-message={message.message} data-translation={message.translation}>
                                <p>{message.message} {message.key}</p>
                                <p>{message.user.userName}: {message.translation}</p>
                            </div>
                        )
                    })
                    }
                </div>

                <div className="ChatContainer">
                    <input id="messageInput" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} onKeyPress={this.keyPress} type="text" placeholder="Message" className="form-control" style={styleInput} />
                    <br />
                    <button onClick={this.sendMessage} className="btn btn-primary form-control" style={styleButton}>SEND</button>
                </div>
            </div>
        )
    }
}

const toggleMessage = () => {

    console.log(`message clicked`);
    this.setState({
        isHidden: !this.state.isHidden
      })
    };

export default Chat