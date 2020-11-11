import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings, setCurrentPosting } from '../../actions/posting_actions';
import {updateAUser, savePostingToUser} from '../../actions/user_actions';
import SearchPostingItem from './search_posting_item';

const mapStateToProps = state => {
    // debugger
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined){
        currentPost = state.entities.searchedPosts[0]
    };

    let followed_postings = state.session.user.followed_posting;
    // debugger
    if(followed_postings){
            followed_postings.forEach(posting => {
            if((
                posting.posting_id === currentPost.posting_id && posting.posting_id !== undefined)
                ||(posting.posting_id === currentPost.id && posting.posting_id !== undefined)
                ){
                    currentPost = posting;
            };
        })};
    return {
        currentUser: state.session.user,
        currentPosting: currentPost,
        savedPosting: currentPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        updateAPosting: (userId, data) => dispatch(updateAUser(userId, data)),
        setCurrentPosting: (posting) => dispatch(setCurrentPosting(posting)),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData)),
        savePostingToUser: (userId, posting) => dispatch(savePostingToUser(userId, posting))
        // searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingItem);