import { 
    SET_CURRENT_POSTING,
    RECEIVE_SEARCHED_POSTING
} from '../actions/posting_actions';

const CurrentPostingReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_SEARCHED_POSTING:
        let jooble = action.postings.data[0];
        if(jooble === undefined){
            jooble = [];
        };
        const github = action.postings.data[1] || [];
        const concattedPostings = jooble.jobs.concat(github);
        return concattedPostings[0] || {};
    case SET_CURRENT_POSTING:
            // if(typeof action.posting === 'string'){
            //     return JSON.parse(action.posting);
            // };
        return action.posting;
    default:
        return state;
    }
};

export default CurrentPostingReducer;