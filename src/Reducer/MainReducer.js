const defaultState = {
    totalLikes: 100,
    totalCartCount: 0,
}

const MainReducer = (previousState = defaultState, action) => {
    if(action.type === 'INCREMENT_LIKE') {
        return {...previousState, totalLikes: previousState.totalLikes + 1}
    } else if(action.type === 'DECREMENT_LIKE') {
        return {...previousState, totalLikes: previousState.totalLikes - 1}
    }
    return {...previousState};
}

export default MainReducer;