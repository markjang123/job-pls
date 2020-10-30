import React from 'react';


class PostingItem extends React.Component{

    constructor(props){
        super(props)
        debugger
        let savedPostId = this.props.posting.id
        this.state = {
            saved: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserPostings(this.props.userId);
    }


    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    handleClick(){
        if(this.state.saved){
            debugger
            this.props.deletePosting(this.props.posting.id)
            .then(this.setState({saved: false}));
        } else {
            debugger
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
            .then(this.setState({saved: true}));
        }

    }

    render(){
        const { title, location, snippet, salary, source, type, link, company, id, updated, url, description, created_at, how_to_apply} = this.props.posting
        return(
            <li className='posting-listing'>
                <button onClick={this.handleClick}>{this.state.saved ? 'Delete Job Posting from Collection' : 'Save Job Posting for Collection'}</button>
                <div>{title ? title : ''}</div>
                <div>{location ? location : ''}</div>
                <div>{snippet ? snippet : ''}</div>
                <div>{salary ? salary : ''}</div>
                <div>{source ? source : ''}</div>
                <div>{type ? type : ''}</div>
                <div>{link ? link : ''}</div>
                <div>{company ? company : ''}</div>
                <div>{id ? id : ''}</div>
                <div>{updated ? updated : ''}</div>
                <div>{url ? url : ''}</div>
                <div>{description? this.niceDescription(description) : ''}</div>
                <div>{created_at ? created_at : ''}</div>
                <div>{how_to_apply ? how_to_apply : ''}</div>
            </li>       
        ) 
    }

};

export default PostingItem;