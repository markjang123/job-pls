import React from 'react';

class SearchPostingIndex extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            saved: this.props.savedPosting
        }   
        this.handleClick = this.handleClick.bind(this);
        this.updatingUser = this.updatingUser.bind(this);
    }

    componentDidMount(){
        this.props.setCurrentPosting(this.props.searchedPostings[0]);
    }

    selectPost(idx){
        this.props.setCurrentPosting(this.props.searchedPostings[idx])
        .then(() => this.handleClick())
    }

    handleClick(){
        if(this.state.saved){
            // debugger
            this.props.deletePosting(this.props.currentPosting.id)
            .then(this.updatingUser(this.props.currentUser.followed_posting, true));
        } else {
            // debugger
            let newPosting = ({
                user_id: this.props.currentUser.id,
                posting_id: this.props.currentPosting.id.toString(),
                posting_url: this.props.currentPosting.url || this.props.currentPosting.link,
                job_title: this.props.currentPosting.title,
                status: 'interested',
                company: this.props.currentPosting.company,
                salary: this.props.currentPosting.salary,
                description: this.props.currentPosting.description,
                location: this.props.currentPosting.location,
                snippet: this.props.currentPosting.snippet,
                source: this.props.currentPosting.source,
                type: this.props.currentPosting.type,
                created_at: this.props.currentPosting.created_at,
                public:  true,
            })
            this.props.composePosting(newPosting)
            .then(() => {
                debugger
                this.updatingUser(this.props.currentUser.followed_posting, false)
            });
        }
    }

    updatingUser(userArray,status){
        let newUserArray = userArray;

        if(status){
            debugger
            newUserArray = newUserArray.filter(postIDX => postIDX !== this.props.currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
            this.setState({saved: false});
        } else {
            debugger
            newUserArray.push(this.props.currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
            this.setState({saved: true});
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
                                        <button className='posting-list-save-button'>Save this post</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
    }

};

export default SearchPostingIndex;