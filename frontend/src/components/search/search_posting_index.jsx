import React from "react";

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props)  
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    selectPost(idx){
        this.props.setCurrentPosting(this.props.searchedPostings[idx]);
    }
    
    handleClick(posting){
        this.props.setCurrentPosting(posting);
    }

    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, "")
        .replace(/<script[^>]*>.*<\/script>/gm, "")
        .replace(/<[^>]+>/gm, "")
        .replace(/([\r\n]+ +)+/gm, "");
    }

    render(){
        debugger;
        if(this.props.searchedPostings.length === 0) return null;
        if(this.props.currentUser.followed_posting === undefined) return null;
        const { searchedPostings } = this.props
        return(
                <div className="search-result-container">
                    <div className="search-result-list">
                        <ul className="posting-list">
                            {searchedPostings.map((posting, idx) => {
                                return(
                                    <li 
                                        onClick={() => this.selectPost(idx)}
                                        key={posting.id} 
                                        id={posting === this.props.currentPosting
                                        ? "selected-posting" 
                                        : null}>
                                            <div className="posting-list-title">{posting.title ? this.niceDescription(posting.title) : ""}</div>
                                            <div className="posting-list-location">{posting.location ? this.niceDescription(posting.location) : ""}</div>
                                            <div className="posting-list-company">Company: {posting.company ? this.niceDescription(posting.company) : ""}</div>
                                        <button 
                                            className="posting-list-save-button"
                                            onClick={this.handleClick}>
                                                {this.props.currentUser.followed_posting.includes(posting.id.toString()) 
                                                ? "Delete this posting from your collection" 
                                                : "Save this posting to your collection"}
                                            </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
    }

};

export default SearchPostingIndex;