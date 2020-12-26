import PrioritizedPostsContainer from './prioritized_posts'
import { connect } from 'react-redux';
import { fetchCurrentUserPostings, setLoading } from '../../actions/posting_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { prioritizer, lowPrioritizer, mediumPrioritizer, highPrioritizer } from '../../reducers/jobs_selector'


const mSTP = state => {

    let posts = state.session.user.followed_posting

    return {
        currentUser: state.session.user._id,
        modal: state.ui.modal,
        openUsers: false,
        hasUsers: !!Object.keys(state.entities.users).length,
        prioritizedPosts: prioritizer(posts),
        highPriority: highPrioritizer(posts),
        mediumPriority: mediumPrioritizer(posts),
        lowPriority: lowPrioritizer(posts)
    }
}

const mDTP = dispatch => {

    return {
        setLoading: () => dispatch(setLoading()),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(PrioritizedPostsContainer);