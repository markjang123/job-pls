import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';

const mSTP = state => {
    
    let posts = Object.values(state.entities.posts)
    return{
        currentUser: state.session.user,
        posts: posts.sort((a, b) => b.priority - a.priority)
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings())
    }
}
const SortedPostIndexContainer = connect(mSTP,mDTP)(PostIndex)
export default SortedPostIndexContainer