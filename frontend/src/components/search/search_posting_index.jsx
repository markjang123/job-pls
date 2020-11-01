import React from 'react';

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props)   
    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    selectPost(idx){
        // debugger
        this.props.setCurrentPosting(this.props.searchedPostings[idx]);
    }

    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    render(){
        // debugger
        if(this.props.searchedPostings.length === 0) return null;
        const { searchedPostings } = this.props
        return(
                <div className='search-result-container'>
                    <ul className='posting-list'>
                        {searchedPostings.map((posting, idx) => {
                            return(
                                <li 
                                    onClick={() => this.selectPost(idx)}
                                    key={posting.id} 
                                    id={posting === this.props.currentPosting
                                    ? 'selected-posting' 
                                    : null}>
                                        <div className='posting-list-title'>{posting.title ? this.niceDescription(posting.title) : ''}</div>
                                        <div className='posting-list-location'>{posting.location ? this.niceDescription(posting.location) : ''}</div>
                                        <div className='posting-list-company'>Company: {posting.company ? this.niceDescription(posting.company) : ''}</div>
                                        <button>Save this post</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
    }

};

export default SearchPostingIndex;