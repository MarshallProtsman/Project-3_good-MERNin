import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import io from 'socket.io-client';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';

class Chat extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

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
            isHidden: true
        };

        // pass the user profile to server to add to socket/client instance
       this.socket = io( { query: this.user }, function () {
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
        };

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
            };
        };
    };

    toggleMessage = () => {
        const {isHidden} = this.state

        console.log(`message clicked key:`)

        this.setState({
                isHidden: !isHidden
              })
            };

    render() {
        // style declarations
        const style = {
            Body: {
                textAlign: 'center',
                // padding: '10%',
                fontSize: 1 + 'em',
                height: 80 + 'vh'
            },

            Input: {
                fontSize: 1 + 'em',
                marginBottom: 0.33 + 'em',
                border: '1px solid lightgrey',
                padding: 0.66 + 'em',
                width: '66%',
                borderRadius: '15em',
            },

            Button: {
                width: 4 + 'em',
                fontSize: 1 + 'em',
                marginTop: 1 + 'em',
                color: 'white',
                background: '#000000',
                padding: 0.22 + 'em',
                borderRadius: '15em',
                marginLeft: '1.33em'
                // border: 'none'
            },

            Messages: {
                paddingRight: 1.33 + 'em',
                minHeight: 1 + 'em',
                margin: 0.33 + 'em',
                position: 'absolute',
                bottom: '11em',
                width: '100%',
                left: 0,
                margin: 'auto',
                maxHeight: '60%',
                overflow: 'scroll'
            },

            msgUser: {
                opacity: 0.66,
                textAlign: 'right',
                margin: '0.33em 1em 0 1em'
                
                // width: '60%'
            },

            msgFriend: {
                textAlign: 'left',
                margin: '0.33em 1em 0 1em'
                // width: '60%'
            },

            ChatContainer: {
                position: 'absolute',
                width: '100%',
                margin: 'auto',
                borderTop: '2px solid lightgrey',
                left: 0,
                bottom: 2 + 'em',
                paddingTop: '2em'
            },
            msgBodyUser: {
                background: '#ffffff',
                maxWidth: '60%',
                borderRadius: '15em',
                textTransform: 'none',
                fontSize: '1.1em',
                padding: '0 0.66em 0 0.66em',
                textAlign: 'left'
            },
            msgBodyFriend: {
                background: '#DB504A',
                maxWidth: '60%',
                borderRadius: '15em',
                color: '#ffffff',
                textTransform: 'none',
                fontSize: '1.1em',
                padding: '0 0.66em 0 0.66em',
            }
        }

        return (
            <div style={style.Body}>
                {/* <p>Chat Profile Pics Here</p> */}
                <div className="Messages" style={style.Messages}>
                    {this.state.messageList.map(message => {

                        let msgStyle = {};
                        let msgBody = {};

                        if (message.user.id === this.user.id) {
                            msgStyle = style.msgUser;
                            msgBody = style.msgBodyUser;
                            console.log('user')
                        } else {
                            msgStyle = style.msgFriend;
                            msgBody = style.msgBodyFriend;
                        }
                        return (
                            <Box>
                            <Fade clear>
                                <div style={msgStyle} key={message.key} data-message={message.message} data-translation={message.translation}>
                                <Button onClick={this.toggleMessage} id={message.key} style={msgBody}>
                                    {this.state.isHidden ? (<span>{message.user.name}: {message.translation}</span>) : (<span> {message.user.name}: {message.message}</span>) }
                                    </Button>
                                </div>
                                </Fade>
                            </Box>
                        )
                    })
                    }
                </div>

                <div className="ChatContainer" style={style.ChatContainer}>
                <input id="messageInput" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} onKeyPress={this.keyPress} type="text" placeholder="Message" className="form-control" style={style.Input} />
                    <button onClick={this.sendMessage} className="btn btn-primary form-control" style={style.Button}>SEND</button>
                </div>
            </div>
        )
    }
}

export default Chat;