import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PostingsReducer from './posting_reducer';


export default combineReducers({
    users: usersReducer,
    posts: PostingsReducer
});
