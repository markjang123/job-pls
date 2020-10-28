import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';

// need to handle modal actions, container, and modal.jsx
// 


const mSTP = state => {
    return{
        currentUser: state.entities.users[state.session.id],
        posts: Object.values(state.entities.pins)
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