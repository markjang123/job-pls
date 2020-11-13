import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings,setCurrentPosting } from '../../actions/posting_actions';
import {updateAUser, savePostingToUser} from '../../actions/user_actions';
import SearchPostingIndex from './search_posting_index';
import { createPosting } from './create_posting';

const mapStateToProps = state => {
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined){
        currentPost = state.entities.searchedPosts[0];
    };
    let followed_postings = state.session.user.followed_posting;
    if(followed_postings){
        followed_postings.forEach(posting => {
            if(
                posting.posting_id === currentPost.posting_id 
                && posting.posting_id !== undefined){
                    currentPost = posting;
            };
        }
    )};
    return {
        currentUser: state.session.user,
        currentPosting: createPosting(currentPost),
        searchedPostings: state.entities.searchedPosts

    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        updateAPosting: (userId, data) => dispatch(updateAUser(userId, data)),
        setCurrentPosting: ( posting ) => dispatch(setCurrentPosting(posting)),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData)),
        savePostingToUser: (userId, posting) => dispatch(savePostingToUser(userId, posting))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingIndex);