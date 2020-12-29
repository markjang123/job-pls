
import React from "react";
import SearchPostingItem from './search_posting_item_container';
import { createPosting } from './create_posting';

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    
    handleClick(posting){
        this.props.setCurrentPosting(posting);
    }


    render(){
        if(this.props.searchedPostings.length === 0) return null;

        if(this.props.currentUser.followed_posting === undefined) return null;
        
        const { searchedPostings } = this.props;
        
        return(
            <div className="search-result-container">
                <div className="search-result-list">
                        {searchedPostings.map((posting, idx) => {
                            return(
                                <div className='search-result-card'
                                    onClick={() => this.handleClick(createPosting(posting))}
                                    key={posting.posting_id} 
                                    id={posting === this.props.currentPosting
                                    ? "selected-posting" 
                                    : null}>
                                        <div className="job-title">{posting.job_title ? posting.job_title : ""}</div>
                                        <div className="company">{posting.company ? posting.company : ""}</div>
                                        <div className="location">{posting.location ? posting.location : ""}</div>

                                </div>
                            )
                        })}
                </div>
                <SearchPostingItem/>
            </div>
        )
    }

};

export default SearchPostingIndex;