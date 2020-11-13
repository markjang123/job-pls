import UsersIndex from './users_index';
import {connect} from 'react-redux';
import {fetchAllUsers, updateAUser} from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        className: "user-follow-index"
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersIfNeeded: () => {
            return null
        },
        updateAUser: (userId, userData) => dispatch(updateAUser(userId,userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
