import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <div className={classes.Topbar}>
            <Link className={classes.MenuItem} to='/'>Home</Link>
            <Link className={classes.MenuItem} to='/details'>Details</Link>
        </div>
    );
}

export default Topbar;