import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';

// need to handle modal actions, container, and modal.jsx
// 


const mSTP = state => {
    return{
        currentUser: state.session.user,
        posts: Object.values(state.entities.posts)
        // modal: state.ui.modal goes here
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings())
        //open modal goes here
    }
}

export default connect(mSTP,mDTP)(PostIndex)