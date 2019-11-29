import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './Topbar.module.css';
import { HOME_PAGE, LOGIN_PAGE } from '../../Utils/RouteEndpoints';
import { globalAgent } from 'http';

const Topbar = (props) => {
    return(
        <div className={classes.Topbar}>
            <Link className={classes.MenuItem} to={HOME_PAGE}>Home</Link>
            {
                props.loggedInStatus ? 
                <Link className={classes.MenuItem} onClick={props.onUserLoggedOut}>Logout</Link>
                :
                <Link className={classes.MenuItem} to={LOGIN_PAGE}>Login</Link>
            }

            <p>Like Count: {props.totLikes}</p>
        </div>
    );
}

const mapGlobalStateToProps = (globalState) => {
    return {
        totLikes: globalState.totalLikes,
        cartCount: globalState.totalCartCount
    }
}

export default connect(mapGlobalStateToProps)(Topbar);