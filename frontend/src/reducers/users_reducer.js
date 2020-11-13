import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_USERS, UPDATE_USER} from '../actions/user_actions';



const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USERS:
            for (const user of action.users){
                nextState[user._id] = user
            }
            return nextState;
        case RECEIVE_USER:
            nextState[action.user._id] = action.user
            return nextState
        case UPDATE_USER:
            nextState[action.user._id] = action.user
            return nextState
        default:
            return state;
    }
};

export default usersReducer;