import { 
    SET_CURRENT_POSTING,
    RECEIVE_SEARCHED_POSTING
} from '../actions/posting_actions';
import { UPDATE_CURRENT_USER_POSTINGS } from '../actions/user_actions';

const CurrentPostingReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        let jooble = action.postings.data[0];
        if(jooble === undefined){
            jooble = [];
        };
        const github = action.postings.data[1] || [];
        const concattedPostings = github.concat(jooble.jobs);
        return concattedPostings[0] || {};
    case SET_CURRENT_POSTING:
        return action.posting;
    case UPDATE_CURRENT_USER_POSTINGS:
        return action.posting;
    default:
        return state;
    }
};

export default CurrentPostingReducer;