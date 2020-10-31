import { 
    RECEIVE_POSTINGS,
    RECEIVE_POSTING,
    RECEIVE_USER_POSTINGS, 
    RECEIVE_NEW_POSTING,
    DESTROY_POSTING 
} from '../actions/posting_actions';


const initialState =  {
    all: [],  // 
    user: [], // 
    new: [] // 
};
  
// const PostingsReducer = (state = initialState, action) => {
const PostingsReducer = (state = initialState, action) => {
  
    Object.freeze(state);
    let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTINGS:
        // debugger
        return action.postings
    case RECEIVE_POSTING:
        return action.posting.data;
    case RECEIVE_USER_POSTINGS:
        // debugger
        newState.user = action.postings.data;
        return newState;
    case RECEIVE_NEW_POSTING:
        // debugger
        newState.new = action.posting.data
        newState.user.push(action.posting.data)
        return newState;
    case DESTROY_POSTING:
        // debugger
        newState.user[action.postingId] = undefined;
        return newState;
    default:
        return state;
    }
};

export default PostingsReducer;