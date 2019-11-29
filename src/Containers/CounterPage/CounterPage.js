import React from 'react';
import {connect} from 'react-redux';

import classes from './CounterPage.module.css';

const CounterPage = (props) => {
    return(
        <div className={classes.MainContainer}>
            <h1>{props.totLikes}</h1>
            <button onClick={props.onLikeClick}>Add Like</button>
            <button onClick={props.onDislikeClick}>Remove Like</button>
        </div>
    )
}

const mapGlobalStateToProps = (globalState) => {
    return {
        totLikes: globalState.totalLikes,
        cartCount: globalState.totalCartCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLikeClick: () => {dispatch({type: 'INCREMENT_LIKE'})},
        onDislikeClick: () => {dispatch({type: 'DECREMENT_LIKE'})}
    }
}

export default connect(mapGlobalStateToProps, mapDispatchToProps)(CounterPage);