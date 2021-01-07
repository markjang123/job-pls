import {connect} from 'react-redux';
import {fetchCurrentUserPostings, searchPosting, setLoading} from '../../actions/posting_actions';
import {withRouter} from 'react-router-dom';
import SearchTab from './search_tab'
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user._id,
        searchedPostings: state.entities.searchedPosts,
        currentPosting: state.entities.currentPosting,
        loading: state.ui.loading
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
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTab));