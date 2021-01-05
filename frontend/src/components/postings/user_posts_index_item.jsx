import React from 'react';

class UserPostsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.statusBar = this.statusBar.bind(this)
    }



    statusBar(){
        let status = this.props.job.status
        let id = 'two-prog'

        if ( status === "Haven't applied" ){
            id = 'two-prog'
        } else if ( status === 'Call Back'){
            id ='three-prog'
        } else if ( status === 'Phone Interview'){
            id ='four-prog'
        } else if ( status === 'On-site Interview'){
            id ='five-prog'
        } else if ( status === 'On-site Interview'){
            id ='six-prog'
        } else if ( status === 'Offer Received'){
            id ='seven-prog'
        } else if ( status === 'Offer Accepted'){
            id ='eight-prog'
        }

        return(
            <div className='prog-bar-container'>
                <div className='prog' id={id}>

                </div>

            </div>
        )
    }
        

    render(){


    return (         
        <div className="user-posts-index-item">
            <a 
                id="job-title" 
                href={this.props.job.posting_url} 
                target="blank">
                    {this.props.job.job_title}
            </a>
            <h3 
                id="job-company">
                    {this.props.job.company}
            </h3>
            <h3 
                id="job-salary">
                    {this.props.job.salary}
            </h3>

            {this.statusBar()}
            {/* <h3 
                id="job-status">
                    {this.props.job.status}
            </h3> */}
        </div>);
    }
}

export default UserPostsIndexItem;