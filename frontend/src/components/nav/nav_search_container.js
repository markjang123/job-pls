import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchPosting, setLoading, fetchCurrentUserPostings } from '../../actions/posting_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import NavSearch from './nav_search';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user._id,
        searchedPostings: state.entities.SearchedPosts,
        loading: state.ui.loading,
        hasUsers: !!Object.keys(state.entities.users).length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        setLoading: () => dispatch(setLoading()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));