import React, {Component} from 'react';
import Axios from 'axios';

import classes from './LoginPage.module.css';
import { POST_LOGIN } from '../../WebServices/APIEndpoints';
import { HOME_PAGE } from '../../Utils/RouteEndpoints';

class LoginPage extends Component {
    state = {
        usernameInputValue: '',
        passwordInputValue: '',
        usernameInputValid: true,
    }
    
    onSubmitClick = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.usernameInputValue,
            password: this.state.passwordInputValue
        }
        Axios.post(POST_LOGIN, data)
        .then(response => {
            alert('Login Successful')
            this.props.onUserLoggedIn();
            this.props.history.push(HOME_PAGE);
        })
        .catch(err => {
            alert('Login Failed')
        })
    }

    onInputValChange = (e, type) => {
        console.log(e.target.value);
        switch(type) {
            case 'username':
                //Check if it is valid
                this.setState({usernameInputValue: e.target.value});
                break;
            case 'password':
                this.setState({passwordInputValue: e.target.value});
                break;
            default: break;
        }
    }

    render() {
        return(
            <div className={classes.MainContainer}>
            <h1>Login Page</h1>
            <form onSubmit={this.onSubmitClick}>
                <input type="text" name="username" placeholder="Username" value={this.state.usernameInputValue} onInput={(e) => this.onInputValChange(e, 'username')} />
                {
                    this.state.usernameInputValid? null :
                    <p>Please enter a valid username</p>
                }

                <input type="password" name="password" placeholder="Password" value={this.state.passwordInputValue} onInput={(e) => this.onInputValChange(e, 'password')} />

                <input type="submit" value="Login" />
            </form>
            </div>
        )
    }
}

export default LoginPage;