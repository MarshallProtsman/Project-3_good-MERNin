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
        let newArray = this.state.messages; // capture existing state
        let msgTextInput = document.getElementById('messageText'); // assign the input to a variable
        let msgText = msgTextInput.value; // capture input text

        // validate the input and prevent blank messages
        if (msgText) {
            // capture message data, add unique key
            let msg = {
                id: this.state.messages.length + 1,
                user: 'John',
                msgNative: msgText,
                msgTarget: `Fake translation: ${msgText}`
            };

            newArray.push(msg); // add new message to new array

            console.log(newArray); // tell us what's up

            // set the new state to capture the additional message
            this.setState({
                messages: newArray
            });

            msgTextInput.value = ''; // clear out the input 

        } else {
            console.log('Message text cannot be empty...'); // you know we can't send an empty msg...
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