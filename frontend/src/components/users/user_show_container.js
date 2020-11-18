import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import { fetchUserPostings, fetchCurrentUserPostings, setLoading } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ( state, ownProps ) => {
    return {
        currentUser: state.session.user,
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        hasUsers: !!Object.keys(state.entities.users).length,
        userPostings: state.entities.posts.user,
    }
}

const mDTP = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchUserPostings: (id) => dispatch(fetchUserPostings(id)),
        setLoading: () => dispatch(setLoading()),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId)),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(mSTP, mDTP)(UserShow));