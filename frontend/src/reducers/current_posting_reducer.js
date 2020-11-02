import { 
    SET_CURRENT_POSTING,
    RECEIVE_SEARCHED_POSTING
} from '../actions/posting_actions';

const CurrentPostingReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        debugger
        const concattedPostings = action.postings.data[0].jobs.concat(action.postings.data)[0] || {};
        return concattedPostings;
    case SET_CURRENT_POSTING:
        debugger
        return action.posting;
    default:
        return state;
    }
};

export default CurrentPostingReducer;