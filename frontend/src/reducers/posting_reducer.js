import { 
    RECEIVE_POSTINGS,
    RECEIVE_POSTING,
    RECEIVE_USER_POSTINGS, 
    RECEIVE_NEW_POSTING,
    UPDATE_POSTING
} from '../actions/posting_actions';


const initialState =  {
    all: [], 
    user: [], 
    new: [] 
};
  
const PostingsReducer = (state = initialState, action) => {

  
    Object.freeze(state);
    let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTINGS:
        return action.postings;
    case RECEIVE_POSTING:
        return action.posting.data;
    case RECEIVE_USER_POSTINGS:
        newState.user = action.postings.data;
        return newState;
    case RECEIVE_NEW_POSTING:
        newState.new.push(action.posting.data);
        newState.user.push(action.posting.data);
        return newState;
    case UPDATE_POSTING:
        let newPosting = action.posting
        let oldPosting = newState.user.find(posting => posting._id === newPosting._id);
        let oldPostingIndex = newState.user.indexOf(oldPosting);
        newState.user[oldPostingIndex] = newPosting;
        return newState;     
    default:
        return state;
    }
};

export default PostingsReducer;