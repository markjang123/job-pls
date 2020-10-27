import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PostingsReducer from './posting_reducer'

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    postings: PostingsReducer
});

export default RootReducer;