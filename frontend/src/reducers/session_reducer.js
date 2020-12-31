import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';
import { DESTROY_POSTING, RECEIVE_CURRENT_USER_POSTINGS } from '../actions/posting_actions';
import {UPDATE_CURRENT_USER, UPDATE_CURRENT_USER_POSTINGS} from '../actions/user_actions';

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
        case UPDATE_CURRENT_USER:
            if(state.user._id === action.user._id){
                let completelyNewUser = Object.assign( {} , action.user);
                let updatedUserPostings = state.user.followed_posting;
                completelyNewUser.followed_posting = updatedUserPostings;
                debugger;
                return {
                    isAuthenticated: state.isAuthenticated,
                    user: completelyNewUser
                }
            } else {
                return state;
            }
        case RECEIVE_CURRENT_USER_POSTINGS:
            if(state.user._id === action.userId){
                let newUser = state.user;
                newUser.followed_posting = action.postings.data;
                return {
                    isAuthenticated: state.isAuthenticated,
                    user: newUser
                }
            } else {
                return state;
            };
        case UPDATE_CURRENT_USER_POSTINGS:
            let updatedUser = state.user;
            updatedUser.followed_posting.push(action.posting);
            return {
                isAuthenticated: state.isAuthenticated,
                user: updatedUser
            }
        default:
            return state;
    }
}

export default SessionReducer;