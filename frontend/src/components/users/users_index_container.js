import UsersIndex from './users_index';
import {connect} from 'react-redux';

const mSTP = state => {
    return {
        users: Object.values(state.entities.users),
        currentUser: state.session.user,
        className: "users-index",
    }
} 

const mDTP = dispatch => {
    return {        
    }
}

export default connect(mSTP, mDTP)(UsersIndex);
