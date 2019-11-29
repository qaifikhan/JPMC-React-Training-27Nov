const redux = require('redux');

const defaultState = {
    totalLikes: 0,
    totalDislikes: 0,
    cartCount: 0,
}

const mainReducer = (previousState=defaultState, action) => {
    if(action.type === 'INCREMENT_LIKE') {
        return {...previousState, totalLikes: previousState.totalLikes + 1}
    }
    return {...previousState};
}

const globalStore = redux.createStore(mainReducer);

globalStore.subscribe(() => {
    console.log(globalStore.getState())
})

globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_LIKE'});