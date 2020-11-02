import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PostingsReducer from './posting_reducer';
import SearchPostingReducer from './search_posting_reducer';
import CurrentPostingReducer from './current_posting_reducer'


export default combineReducers({
    users: usersReducer,
    posts: PostingsReducer,
    searchedPosts: SearchPostingReducer,
    currentPosting: CurrentPostingReducer
});
