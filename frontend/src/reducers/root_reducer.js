import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PostingsReducer from './posting_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    postings: PostingsReducer,
    ui: uiReducer,
    entities: entitiesReducer
});

export default RootReducer;