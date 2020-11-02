import React from 'react';


class SearchPostingItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            saved: this.props.savedPosting
        }
        this.handleClick = this.handleClick.bind(this);
        this.updatingUser = this.updatingUser.bind(this);
    }

    // componentDidMount(){
    //     debugger
    //     this.setState({
    //         saved: this.props.currentUser.followed_posting.includes(this.props.currentPosting.id.toString())
    //     });
    // }


    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/&nbsp/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    handleClick(){
        if(this.state.saved){
            this.props.deletePosting(this.props.currentPosting.id)
            .then(this.updatingUser(this.props.currentUser.followed_posting, true));
        } else {
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
                this.updatingUser(this.props.currentUser.followed_posting, false)
            });
        }
    }

    updatingUser(userArray,status){
        let newUserArray = userArray;

        if(status){
            newUserArray = newUserArray.filter(postIDX => postIDX !== this.props.currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
            this.setState({saved: false});
        } else {
            newUserArray.push(this.props.currentPosting.id.toString());
            newUserArray = [...new Set(newUserArray)];
            this.setState({saved: true});
        }
        this.props.updateAUser(this.props.currentUser.id,{followed_posting: newUserArray})
        .then(this.forceUpdate());
    }

    render(){
        if(this.props.currentPosting.id === undefined) return null;

        if(this.props.currentUser.followed_posting.includes(this.props.currentPosting.id.toString()) && this.state.saved === false){
            this.setState({saved: true})
        }

        if(!this.props.currentUser.followed_posting.includes(this.props.currentPosting.id.toString()) && this.state.saved === true){
            this.setState({saved: false})
        }

        const { title, location, snippet, salary, source, type, link, company, id, updated, url, description, created_at, how_to_apply} = this.props.currentPosting
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

export default SearchPostingItem;