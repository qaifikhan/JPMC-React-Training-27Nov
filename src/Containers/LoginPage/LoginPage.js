import React, {Component} from 'react';
import Axios from 'axios';

import classes from './LoginPage.module.css';
import { POST_LOGIN } from '../../WebServices/APIEndpoints';
import { HOME_PAGE } from '../../Utils/RouteEndpoints';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        console.log('Value Entered Username => ', this.usernameRef.current.value);
        console.log('Value Entered Password => ', this.passwordRef.current.value);
        const data = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
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

    render() {
        return(
            <div className={classes.MainContainer}>
            <h1>Login Page</h1>
            <form onSubmit={this.onSubmitClick}>
                <input ref={this.usernameRef} type="text" name="username" placeholder="Username" />
                <input ref={this.passwordRef} type="password" name="password" placeholder="Password" />

                <input type="submit" value="Login" />
            </form>
            </div>
        )
    }
}

export default LoginPage;