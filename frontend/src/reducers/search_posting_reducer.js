import { 
    RECEIVE_SEARCHED_POSTING,
    RECEIVE_SEARCHED_GIT_POSTING
  } from '../actions/posting_actions';

// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
      return action.postings.data.jobs;
    case RECEIVE_SEARCHED_GIT_POSTING:
      return action.postings.data
    default:
      return state;
  }
};

export default PostingsReducer;