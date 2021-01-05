import SearchPostingItem from './search_posting_item';
import {connect} from 'react-redux';
import { createPosting } from './create_posting';
import {updateTheCurrentUser, savePostingToUser} from '../../actions/user_actions';
import { deletePosting, setCurrentPosting } from '../../actions/posting_actions';

const mapStateToProps = state => {
    debugger
    let currentPost = state.entities.currentPosting;
    if(currentPost === {} || currentPost === undefined){
        currentPost = state.entities.searchedPosts[0]
    };
    currentPost = createPosting(currentPost);

    let followed_postings = state.session.user.followed_posting;
    if(followed_postings){
        followed_postings.forEach(posting => {
            if((
                posting.posting_id === currentPost.posting_id 
                && posting.posting_id !== undefined)
                ||(posting.posting_id === currentPost.id 
                && posting.posting_id !== undefined)
                ){
                    currentPost = posting;
            };
        }
    )};
    return {
        currentUser: state.session.user,
        currentPosting: createPosting(currentPost),
        savedPosting: currentPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        setCurrentPosting: (posting) => dispatch(setCurrentPosting(posting)),
        updateTheCurrentUser: (userId, userData) => dispatch(updateTheCurrentUser(userId, userData)),
        savePostingToUser: (userId, posting) => dispatch(savePostingToUser(userId, posting))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingItem);