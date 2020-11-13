import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';

const mSTP = state => {
    return{
        currentUser: state.session.user,
        posts: Object.values(state.entities.posts)
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings())
    }
}

export default connect(mSTP,mDTP)(PostIndex)