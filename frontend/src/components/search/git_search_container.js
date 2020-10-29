import {connect} from 'react-redux';
import { githubSearchPosting } from '../../actions/posting_actions'
import GitSearch from './git_search'

const mapStateToProps = state => {
    return {
        searchedPostings: state.entities.searchedPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        githubSearchPosting: postingParams => dispatch(githubSearchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GitSearch);