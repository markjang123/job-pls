import React from 'react';


class PostingItem extends React.Component{

    constructor(props){
        super(props)
        // debugger
        let savedPostId = this.props.posting.id
        this.state = {
            saved: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.updatingUser = this.updatingUser.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserPostings(this.props.userId);
    }


    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/&nbsp/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    handleClick(){
        if(this.state.saved){
            // debugger
            this.props.deletePosting(this.props.posting.id)
            .then(this.updatingUser(this.props.userPostings, true));
        } else {
            // debugger
            let newPosting = ({
                user_id: this.props.userId,
                posting_id: this.props.posting.id.toString(),
                posting_url: this.props.posting.url || this.props.posting.link,
                job_title: this.props.posting.title,
                status: 'interested',
                company: this.props.posting.company,
                salary: this.props.posting.salary,
                description: this.props.posting.description,
                location: this.props.posting.location,
                snippet: this.props.posting.snippet,
                source: this.props.posting.source,
                type: this.props.posting.type,
                link: this.props.posting.link,
                created_at: this.props.posting.created_at,
                public:  true,
            })
            this.props.composePosting(newPosting)
            .then(this.updatingUser(this.props.userPostings, false));
        }
    }

    updatingUser(userArray,status){
        let newUserArray = userArray;

        if(status){
            // debugger
            newUserArray = newUserArray.filter(postIDX => postIDX !== this.props.posting.id);
            this.setState({saved: false});
        } else {
            // debugger
            newUserArray.push(this.props.posting.id.toString());
            this.setState({saved: true});
        }
        this.props.updateAUser(this.props.userId,{followed_posting: newUserArray})
        .then(this.forceUpdate());
    }

    render(){
        const { title, location, snippet, salary, source, type, link, company, id, updated, url, description, created_at, how_to_apply} = this.props.posting
        return(
            <div className='posting-listing'>
                <button className='posting-listing-add-button' onClick={this.handleClick}>{this.state.saved ? 'Delete Job Posting from Collection' : 'Save Job Posting for Collection'}</button>
                <div className='posting-listing-title'>{title ? title : ''}</div>
                <div className='posting-listing-company'>{company ? company : ''}</div>
                <div className='posting-listing-location'>Location: {location ? location : ''}</div>
                <div className='posting-listing-snippet'>{snippet ? 'Snippet from the website: ' + this.niceDescription(snippet).slice(1,snippet.length-1) : ''}</div>
                <div className='posting-listing-description'>{description? `${this.niceDescription(description).slice(0,1500)}...` : ''}</div>
                <div className='posting-listing-type'>{type ? `Schedule: ${type}` : ''}</div>
                <div className='posting-listing-salary'>{salary ? `Salary: ${salary}` : ''}</div>
                <div className='posting-listing-url'>{url ? <a href={url}>Click here to apply.</a> : ''}</div>
                <div className='posting-listing-link'>{link ? <a href={this.niceDescription(link)}>Click here to apply.</a> : ''}</div>
                <div className='posting-listing-created_at'>{created_at ? created_at : ''}</div>
            </div>       
        ) 
    }

};

export default PostingItem;

