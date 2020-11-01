import {connect} from 'react-redux';
import {searchPosting} from '../../actions/posting_actions';
import {withRouter} from 'react-router-dom';
import SearchTab from './search_tab'

const mapStateToProps = state => {
    return {
        searchedPostings: state.entities.searchedPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTab));