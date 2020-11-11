import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';
import {UPDATE_USER} from '../actions/user_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const SessionReducer = (state = initialState, action) => {



    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
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

// Returned from back end token doesnt have updated follow postings