import { RECEIVE_SEARCHED_POSTING } from '../actions/posting_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { createPosting } from '../components/search/create_posting';


const PostingsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        let jooble = action.postings.data[0];
        if(jooble === undefined){
            jooble = [];
        };
        const github = action.postings.data[1] || [];
        const concattedPostings = github.concat(jooble.jobs);
        const uniquePostingList = [...new Set(concattedPostings)];
        const uniqueFormattedPostings = uniquePostingList.map((posting) => {
            return createPosting(posting);
        });
        return uniqueFormattedPostings;
    case RECEIVE_USER_LOGOUT:
        return [];
    default:
        return state;
    }
};

export default PostingsReducer;