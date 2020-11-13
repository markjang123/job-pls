import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';
import { DESTROY_POSTING } from '../actions/posting_actions';
import {UPDATE_USER} from '../actions/user_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const SessionReducer = (state = initialState, action) => {



    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: {}
            };
        case DESTROY_POSTING:
            let newUser = state.user;
            newUser.followed_posting = newUser.followed_posting.filter(idx => idx !== action.postingId);
            return {
                isAuthenticated: true,
                user: newUser
            }
        case UPDATE_USER:
            debugger
            if(state.user.id === action.user.id){
                return {
                    isAuthenticated: state.isAuthenticated,
                    user: action.user
                }
            } else {
                return state
            }
        default:
            return state;
    }
}

export default SessionReducer;