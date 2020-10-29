import { 
    RECEIVE_POSTINGS,
    RECEIVE_POSTING,
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
  
  // switch(action.type) {
  //   case RECEIVE_POSTINGS:
  //     newState = action.postings.data;
  //     return newState;
  //   case RECEIVE_POSTING:
  //     newState = action.posting.data;
  //     return newState;
  //   case RECEIVE_USER_POSTINGS:
  //     newState.user = action.postings.data;
  //     return newState;
  //   case RECEIVE_NEW_POSTING:
  //     newState.new = action.posting.data
  //     return newState;
  //   default:
  //     return state;
  // }

  switch (action.type) {
    // case RECEIVE_POSTINGS:
    //   for (const post of action.postings.data){
    //     newState[post._id] = post
    //   }
    //   return newState;
    case RECEIVE_POSTINGS:
      return Object.assign({}, state, action.postings.data)
    case RECEIVE_POSTING:
      return action.posting.data;
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