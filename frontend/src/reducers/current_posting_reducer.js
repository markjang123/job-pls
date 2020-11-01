import { 
    SET_CURRENT_POSTING
} from '../actions/posting_actions';

const CurrentPostingReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case SET_CURRENT_POSTING:
        debugger
        return action.posting;
    default:
        return state;
    }
};

export default CurrentPostingReducer;