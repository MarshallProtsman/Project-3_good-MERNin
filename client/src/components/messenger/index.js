import React, { Component } from 'react';
import MessageContainer from './MessageContainer';

class Messenger extends Component {
    state = {
        convoID: 'Hello World',
        convoUsers: [
            {
                userName: 'John',
                userID: '012543',
                langNative: 'en',
                langTarget: 'es'
            }
        ],
        messages: [
            {
                id: 1,
                user: 'John',
                msgNative: 'Hello World',
                msgTarget: 'Hola Mundo'
            },
            {
                id: 2,
                user: 'Marshall',
                msgNative: 'Hello World to you, as well!',
                msgTarget: 'Hola Mundo a tu, tambien!'
            },
            {
                id: 3,
                user: 'John',
                msgNative: 'I am speaking Spanish!',
                msgTarget: 'Estoy hablando espanol!'
            }
        ]
    }

    messagePush = () => {
        let newArray = this.state.messages;
        let msgTextInput = document.getElementById('messageText');
        let msgText = msgTextInput.value;

        if (msgText) {
            console.log('legit');
            let msg = {
                id: this.state.messages.length + 1,
                user: 'John',
                msgNative: msgText,
                msgTarget: `Fake translation: ${msgText}`
            };
            newArray.push(msg);
            console.log(newArray);
            this.setState({
                messages: newArray
            });
            msgTextInput.value = '';
        } else {
            console.log('Message text cannot be empty...')
        }
    }

    render() {
        return (
            <div>
                <h1>Messenger</h1>
                <MessageContainer messages={this.state.messages} />
                <br />
                <div>Input Here</div>
                <br />
                <input id="messageText" placeholder="Enter your message..."></input>
                <br />
                <button onClick={this.messagePush} > Send </button>
            </div>

        )
    }
}

export default Messenger;