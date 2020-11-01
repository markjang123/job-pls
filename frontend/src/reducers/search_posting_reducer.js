import { RECEIVE_SEARCHED_POSTING } from '../actions/posting_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';


// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        debugger
        const concattedPostings = action.postings.data[0].jobs.concat(action.postings.data[1]);
        return [...new Set(concattedPostings)];
    case RECEIVE_USER_LOGOUT:
        return [];
    default:
        return state;
    }
};

export default PostingsReducer;