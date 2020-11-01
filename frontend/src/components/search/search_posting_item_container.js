import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings, setCurrentPosting } from '../../actions/posting_actions';
import {updateAUser} from '../../actions/user_actions';
import SearchPostingItem from './search_posting_item';

const mapStateToProps = state => {
    debugger
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined) currentPost = state.entities.searchedPosts[0]
    return {
        currentUser: state.session.user,
        currentPosting: currentPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        updateAPosting: (userId, data) => dispatch(updateAUser(userId, data)),
        setCurrentPosting: (posting) => dispatch(setCurrentPosting(posting)),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData))
        // searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingItem);