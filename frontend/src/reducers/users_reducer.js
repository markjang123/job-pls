import { RECEIVE_USER_POSTINGS, RECEIVE_CURRENT_USER_POSTINGS } from '../actions/posting_actions';
import {RECEIVE_USER, RECEIVE_USERS, UPDATE_USER, UPDATE_CURRENT_USER} from '../actions/user_actions';



const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USERS:
            for (const user of action.users){
                nextState[user._id] = user;
            }
            return nextState;
        case RECEIVE_USER:
            nextState[action.user._id] = action.user;
            return nextState;
        case RECEIVE_USER_POSTINGS:
            nextState[action.userId].followed_posting = action.postings.data;
            return nextState;
        case RECEIVE_CURRENT_USER_POSTINGS:
            nextState[action.userId].followed_posting = action.postings.data;
            return nextState;        
        case UPDATE_USER:
            nextState[action.user._id] = action.user;
            return nextState;
        case UPDATE_CURRENT_USER:
            nextState[action.user._id] = action.user;
            nextState[action.user._id].followed_posting = state[action.user._id].followed_posting
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;