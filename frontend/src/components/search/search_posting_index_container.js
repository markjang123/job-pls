import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings,setCurrentPosting } from '../../actions/posting_actions';
import {updateAUser, savePostingToUser} from '../../actions/user_actions';
import SearchPostingIndex from './search_posting_index';

const mapStateToProps = state => {
    // let currentPost = state.entities.currentPosting;
    // if(currentPost === {} || currentPost === undefined) currentPost = state.entities.searchedPosts[0]
    // return {
    //     searchedPostings: state.entities.searchedPosts,
    //     currentPosting: currentPost,
    //     currentUser: state.session.user,
    //     savedPosting: state.session.user.followed_posting.includes(state.entities.currentPosting.id.toString())
    // }

    debugger
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined){
        currentPost = state.entities.searchedPosts[0]
    };
    if(typeof currentPost === String){
        currentPost = JSON.parse(currentPost)
    }
    let followed_postings = state.session.user.followed_posting;
    if(followed_postings){
        followed_postings.forEach(posting => {
            if(posting.posting_id === currentPost.posting_id && posting.posting_id !== undefined){
                currentPost = posting;
            };
        }
    )};
    return {
        currentUser: state.session.user,
        currentPosting: currentPost,
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

        // searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingIndex);