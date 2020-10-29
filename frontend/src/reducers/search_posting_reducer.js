import { 
    RECEIVE_SEARCHED_POSTING
} from '../actions/posting_actions';

// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
      // debugger
      return action.postings.data.jobs;
    default:
      return state;
  }
};

export default PostingsReducer;