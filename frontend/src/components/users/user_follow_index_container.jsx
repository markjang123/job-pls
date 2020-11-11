import UsersIndex from './users_index';
import {connect} from 'react-redux';
import {fetchAllUsers, updateAUser} from '../../actions/user_actions'
const mapStateToProps = state => {
    // debugger
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

const UsersFollowIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
export default UsersFollowIndexContainer