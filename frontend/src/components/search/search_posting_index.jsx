import React from "react";
import SearchPostingItem from './search_posting_item_container';
import SearchPostingIndexItem from './search_posting_index_item';
import { createPosting } from './create_posting';

class SearchPostingIndex extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.idSelector = this.idSelector.bind(this);
    }

    componentDidMount() {
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }


    handleClick(posting) {
        this.props.setCurrentPosting(posting);
    }

    // idSelector(posting){
    //     let posting_to_str = Object.entries(posting).toString();
    //     let currentPosting_to_str = Object.entries(this.props.currentPosting).toString()

    //     return(
    //         posting_to_str === currentPosting_to_str ?
    //                 'selected-posting'   
    //         :
    //                 'null'
    //     )

    // }

    render() {
        if (this.props.searchedPostings.length === 0) return null;

        if (this.props.currentUser.followed_posting === undefined) return null;

        const { searchedPostings } = this.props;

        return (
            <div className="search-result-container">
                <div className="search-result-list">
                    {searchedPostings.map(posting => (
                        <SearchPostingIndexItem
                            // className='job'
                            onClick={() => this.handleClick(createPosting(posting))}
                            post={posting}
                            key={posting.posting_id}
                            id={posting === this.props.currentPosting
                                ? "selected-posting" 
                                : null}
                            // currentUser={currentUser}
                            // modal={modal}
                            // openModal={openModal}
                            // closeModal={closeModal
                            // }
                        />
                    ))}
                                    </div>
                    
                <SearchPostingItem />
            </div>
        )
    }

};

export default SearchPostingIndex;