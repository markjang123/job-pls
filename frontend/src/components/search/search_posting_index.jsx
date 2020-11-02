import React from 'react';

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props)  
        this.handleClick = this.handleClick.bind(this);
        this.updatingUser = this.updatingUser.bind(this);
    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    selectPost(idx){
        this.props.setCurrentPosting(this.props.searchedPostings[idx]);
    }

    handleClick(idx){
        let currentPosting = this.props.searchedPostings[idx];
        if(this.props.currentUser.followed_posting.includes(currentPosting.id.toString()) ){
            // debugger
            this.props.deletePosting(currentPosting.id)
            .then(this.updatingUser(this.props.currentUser.followed_posting, true, currentPosting));
        } else {
            // debugger
            let newPosting = ({
                user_id: this.props.currentUser.id,
                posting_id: currentPosting.id.toString(),
                posting_url: currentPosting.url || currentPosting.link,
                job_title: currentPosting.title,
                status: 'interested',
                company: currentPosting.company,
                salary: currentPosting.salary,
                description: currentPosting.description,
                location: currentPosting.location,
                snippet: currentPosting.snippet,
                source: currentPosting.source,
                type: currentPosting.type,
                created_at: currentPosting.created_at,
                public:  true,
            })
            this.props.composePosting(newPosting)
            .then(() => {
                debugger
                this.updatingUser(this.props.currentUser.followed_posting, false, currentPosting)
            });
        }
    }

    updatingUser(userArray,status, currentPosting){
        let newUserArray = userArray;

        if(status){
            debugger
            newUserArray = newUserArray.filter(postIDX => postIDX !== currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
        } else {
            debugger
            newUserArray.push(currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
        }
        this.props.updateAUser(this.props.currentUser.id,{followed_posting: newUserArray})
        .then(this.forceUpdate());
    }


    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    render(){
        debugger
        if(this.props.searchedPostings.length === 0) return null;
        const { searchedPostings } = this.props
        return(
                <div className='search-result-container'>
                    <div className='search-result-list'>
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
                                        <button 
                                            className='posting-list-save-button'
                                            onClick={() => this.handleClick(idx)}>
                                                {this.props.currentUser.followed_posting.includes(posting.id.toString()) 
                                                ? 'Delete this posting from your collection' 
                                                : 'Save this posting to your collection'}
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