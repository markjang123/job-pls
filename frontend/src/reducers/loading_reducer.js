import { 
    SET_LOADING_STATE, 
    RECEIVE_SEARCHED_POSTING,
    RECEIVE_CURRENT_USER_POSTINGS
} from '../actions/posting_actions';


const LoadingReducer = (oldState = false, action) => {
    Object.freeze(oldState);

    switch(action.type){

        case SET_LOADING_STATE:
            return true;
        case RECEIVE_SEARCHED_POSTING:
            return false;
        case RECEIVE_CURRENT_USER_POSTINGS:
            return false;
        default:
            return oldState;
    }
}

export default LoadingReducer;