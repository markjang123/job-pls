import {connect} from 'react-redux';
import {searchPosting} from '../../actions/posting_actions';
import {withRouter} from 'react-router-dom';
import SearchTab from './search_tab'

const mapStateToProps = state => {
    debugger
    return {
        searchedPostings: state.entities.searchedPosts,
        currentPosting: state.entities.currentPosting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTab));