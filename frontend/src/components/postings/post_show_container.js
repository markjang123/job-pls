import PostShow from './post_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAPosting } from '../../actions/posting_actions';


const mSTP = ({ entities: { posts, users }, session }) => {
    return{
        currentUser: session.user,
        posts
    }
}

const mDTP = dispatch => {
    return{
        updateAPosting: (postingId, postingData) => dispatch(updateAPosting(postingId, postingData)),
    }
}

export default withRouter(connect(mSTP,mDTP)(PostShow))
