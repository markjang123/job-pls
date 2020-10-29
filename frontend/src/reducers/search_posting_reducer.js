import { 
    RECEIVE_SEARCHED_POSTING
  } from '../actions/posting_actions';

// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        const concattedPostings = action.postings.data[0].jobs.concat(action.postings.data[1]);
        return [...new Set(concattedPostings)];
    default:
        return state;
    }
};

export default PostingsReducer;