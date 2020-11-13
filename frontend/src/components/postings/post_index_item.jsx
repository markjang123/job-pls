import React from 'react';
import PostShowContainer from './post_show_container';
import './post.css';


class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
    }

    componentDidMount(){
        <PostShowContainer post={this.props.post} />

    }

    showPost(post){
        return(
            <PostShowContainer post={post}/>
        )
    }

    modeFunc(props) {
        const modalObject = ({
            type: 'post',
            modal: 'post',
            proc: props
        })
        this.props.openModal(modalObject);
        document.body.style.position = 'fixed';
    }

    render(){
        const { post } = this.props;

        return(
            <div className='job' onClick={() => this.modeFunc(this.props)}>
                <ul>
                    <li id='job-title'>
                        {post.job_title}
                    </li> 
                    <li id='company'>
                        {post.company}
                    </li>
                    <li>
                        {post.status}
                    </li>
                </ul>
                <p id='salary'>
                    {post.salary}
                </p>
            </div>
        )
    }
}

export default PostIndexItem;