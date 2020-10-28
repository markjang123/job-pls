import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PostingReducer from './posting_reducer';


export default combineReducers({
    users: usersReducer,
    posts: PostingReducer
});
