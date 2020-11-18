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

    selectPost(posting){
        this.props.setCurrentPosting(createPosting(posting));
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
                    <ul className="posting-list">
                        
                        {searchedPostings.map((posting, idx) => {
                            return(
                                <li
                                    onClick={() => this.selectPost(createPosting(posting))}
                                    key={posting.posting_id} 
                                    id={posting === this.props.currentPosting
                                    ? "selected-posting" 
                                    : null}>
                                        <div className="posting-list-title">{posting.job_title ? posting.job_title : ""}</div>
                                        <div className="posting-list-company">{posting.company ? posting.company : ""}</div>
                                        <div className="posting-list-location">{posting.location ? posting.location : ""}</div>
                                    {/* <button 
                                        className="posting-list-save-button"
                                        onClick={this.handleClick}>
                                            {this.props.currentUser.followed_posting.includes(posting._id) 
                                            ? "Delete this posting from your collection" 
                                            : "Save this posting to your collection"}
                                    </button> */}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <SearchPostingItem/>
            </div>
        )
    }

};

export default SearchPostingIndex;