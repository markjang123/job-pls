import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings,setCurrentPosting } from '../../actions/posting_actions';
import {updateAUser} from '../../actions/user_actions';
import SearchPostingIndex from './search_posting_index';

const mapStateToProps = state => {
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined) currentPost = state.entities.searchedPosts[0]
    return {
        searchedPostings: state.entities.searchedPosts,
        currentPosting: currentPost,
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        updateAPosting: (userId, data) => dispatch(updateAUser(userId, data)),
        setCurrentPosting: ( posting ) => dispatch(setCurrentPosting(posting))

        // searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingIndex);