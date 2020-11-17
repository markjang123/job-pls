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
    case RECEIVE_NEW_POSTING:
        newState.new = action.posting.data
        newState.user.push(action.posting.data)
        return newState;
    // case DESTROY_POSTING:
    //     debugger
    //     return Object.values(newState).filter( posting => posting._id !== action.postingId);
    case UPDATE_POSTING:
        debugger
        let oldPosting = newState.user.find(posting => posting._id === action.posting._id)
        let oldPostingIndex = newState.user.indexOf(oldPosting) // find correct posting in array, replace at index
        newState.user[oldPostingIndex] = action.posting;
        return newState        
    default:
        return state;
    }
};

export default PostingsReducer;