import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser , fetchAllUsers } from '../../actions/user_actions';
import { fetchUserPostings } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities: { posts , users }, session }, ownProps) => {
    let user = users[ownProps.match.params.userId];
    return {
        currentUser: session.user,
        user,
        users
    }
}


const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchUserPostings: (id) => dispatch(fetchUserPostings(id))
    }
}

export default withRouter(connect(mSTP, mDTP)(UserShow));
