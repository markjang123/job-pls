import { 
    RECEIVE_POSTINGS, 
    RECEIVE_USER_POSTINGS, 
    RECEIVE_NEW_POSTING 
} from '../actions/posting_actions';

const initialState =  {
    all: {},  // 
    user: {}, // 
    new: undefined // 
};
  
// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = {}, action) => {
  
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_POSTINGS:
      debugger
      newState = action.postings.data;
      return newState;
    case RECEIVE_USER_POSTINGS:
      newState.user = action.postings.data;
      return newState;
    case RECEIVE_NEW_POSTING:
      newState.new = action.posting.data
      return newState;
    default:
      return state;
  }
};

export default PostingsReducer;