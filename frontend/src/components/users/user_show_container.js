import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser , fetchAllUsers } from '../../actions/user_actions';
// import { fetchAllUsers } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities: { posts , users }, session }, ownProps) => {
// debugger
    let user = users[ownProps.match.params.userId]
    // let post = 'hello'


    return {
        currentUser: users[session.id],
        user,
        // ownProps,
        users
    }
}


const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default withRouter(connect(mSTP, mDTP)(UserShow))
