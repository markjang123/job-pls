import UsersIndex from './users_index';
import {connect} from 'react-redux';
import { updateAUser, updateTheCurrentUser } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        className: "user-follow-index"
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        updateAUser: (userId, userData) => dispatch(updateAUser(userId,userData)),
        updateTheCurrentUser: (userId, userData) => dispatch(updateTheCurrentUser(userId,userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
