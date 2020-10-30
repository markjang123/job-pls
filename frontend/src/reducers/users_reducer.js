import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_USERS, UPDATE_USER} from '../actions/user_actions'



const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USERS:
            for (const user of action.users){
                nextState[user._id] = user
            }
            return nextState;
        case RECEIVE_USER:
            // debugger
            // let nextState = Object.assign({}, state)
            // return nextState[user_id] = user
            // return Object.assign({}, state, {[action.user]: action._id.data})
            debugger
            return action._id.data
        case UPDATE_USER:
            debugger
            nextState[action.user._id] = action.user
            return nextState
        default:
            return state;
    }
};

export default usersReducer;