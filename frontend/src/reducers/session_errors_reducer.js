import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
  
const _nullErrors = [];
  
const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            // if (Object.keys(nextState).length > Object.keys(action.errors).length){
            //     return nextState
            // } else {
            //     return action.errors
            // }
            return action.errors
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return state;
    }
};
  
export default SessionErrorsReducer;