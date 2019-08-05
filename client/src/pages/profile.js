import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SimpleSelect from "../components/languageform"
import NavButton from "../components/navigationbutton"
import { FormControl } from '@material-ui/core'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

class ProfilePage extends Component {
    state = {
        name: this.props.app.name,
        email: this.props.app.email,
        id: this.props.app.id,
        native: this.props.app.native,
        target: this.props.app.target,
        img: this.props.app.img
    }
    // pass in from props (app - dynamic user info would replace hardcoded info below!!!)

    updateParent = () => {
        // replace the values of each var with the response from db
        let name = 'Mr. Database';
        let native = 'en';
        let target = 'ru';
        let email = 'evilevilmonkey@familyguy.com';
        let id = 128943;

        // this fires off to update the app state as a callback
        this.props.appStateHandler(name, target);
        // then once state is updated we re-route to messenger page
    }

    handleImgChange = (event) => {
        this.setState({ img: event.target.value });
        this.props.appStateHandler({
            img: event.target.value
        })
    };

    onSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
    };

    render() {
        const imgStyle = {
            height: 200,
            width: 200
        };

        const styleButton = {
            width: 13 + 'em',
            fontSize: 0.88 + 'em',
            marginTop: 1 + 'em',
            color: 'white',
            background: 'orangered',
            padding: 0.22 + 'em',
            borderRadius: 10 + 'em'
        };

        console.log('App state passed as prop below...');
        console.log(this.props.app.name);
        console.log(this.props);
        return (
            <Box>
                <br />
                <h1 className="#">Profile Page</h1>
                <br />
                <div>User Name:</div>
                <div>{this.state.name}</div>
                <br />
                <div>User Image:</div>
                <img src={this.state.img} alt="user face" style={imgStyle} />
                <br />
                <form className="" onSubmit={this.onSubmit}>
                    <FormControl>
                        <TextField
                            id="image-url"
                            label="Image Url"
                            className=""
                            value={this.state.img}
                            onChange={this.handleImgChange}
                            margin="normal"
                        />
                        <br />
                        <Button type="submit" variant="contained" color="primary">Change Picture</Button>
                        <br />
                    </FormControl>
                </form>
                <br />
                <SimpleSelect language={this.state.native} text="Update Profile" label="Update Profile" context="What language do you speak?" />
                <SimpleSelect language={this.state.target} text="Update Profile" label="Update Profile" context="What language would you like to learn?" />
                <br />
                <NavButton to="/messenger" text="Start Chatting!" />
                <br />
                <button onClick={this.updateParent}>Update</button>
                <button onClick={this.props.appStateHandler} style={styleButton}>Russian Agent Marshal</button>
            </Box>
        );
    };
};

export default ProfilePage;
