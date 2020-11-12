import { 
    RECEIVE_POSTINGS,
    RECEIVE_POSTING,
    RECEIVE_USER_POSTINGS, 
    RECEIVE_NEW_POSTING,
    DESTROY_POSTING,
    UPDATE_POSTING
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
        return action.postings
    case RECEIVE_POSTING:
        return action.posting.data;
    case RECEIVE_USER_POSTINGS:
        newState.user = action.postings.data;
        return newState;
    // case RECEIVE_NEW_POSTING:
    //     newState.user = action.postings.data;
    //     return newState;
    case RECEIVE_NEW_POSTING:
        newState.new = action.posting.data
        newState.user.push(action.posting.data)
        return newState;
    case DESTROY_POSTING:
        newState.user[action.postingId] = undefined;
        return newState;
    case UPDATE_POSTING:
        newState[action.posting.id] = action.posting;
        return newState        
    default:
        return state;
    }
};

export default PostingsReducer;