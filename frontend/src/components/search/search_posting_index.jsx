import React from "react";
import SearchPostingItem from './search_posting_item_container';
import { createPosting } from './create_posting';

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.idSelector = this.idSelector.bind(this);
    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    
    handleClick(posting){
        this.props.setCurrentPosting(posting);
    }

    idSelector(posting){
        let posting_to_str = Object.entries(posting).toString();
        let currentPosting_to_str = Object.entries(this.props.currentPosting).toString()

        return(
            posting_to_str === currentPosting_to_str ?
                    'selected-posting'   
            :
                    'null'
        )

    }

    render(){
        if(this.props.searchedPostings.length === 0) return null;
        if(this.props.currentUser.followed_posting === undefined) return null;
        const { searchedPostings } = this.props;
        debugger
        return(
            <div className="search-result-container">
                <div className="search-result-list">
                    <ul className="posting-list">
                        {searchedPostings.map((posting, idx) => {
                            return(
                                <li
                                    onClick={() => this.handleClick(posting)}
                                    key={posting.posting_id}
                                    id={this.idSelector(posting)}>
                                        <div className="posting-list-title">{posting.job_title ? posting.job_title : ""}</div>
                                        <div className="posting-list-company">{posting.company ? posting.company : ""}</div>
                                        <div className="posting-list-location">{posting.location ? posting.location : ""}</div>
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