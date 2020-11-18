import UserShow from './user_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserPostings, setLoading, fetchCurrentUserPostings } from '../../actions/posting_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = ( state, ownProps ) => {
    return {
        currentUser: state.session.user,
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        hasUsers: !!Object.keys(state.entities.users).length
    }
}


const mDTP = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchUserPostings: (id) => dispatch(fetchUserPostings(id)),
        setLoading: () => dispatch(setLoading()),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId))
    }
}

export default withRouter(connect(mSTP, mDTP)(UserShow));
