import React from 'react';
import PostShowContainer from './post_show_container';
import { randomKeyGen } from '../../util/helper';
import './post.css';


class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
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
                    <li key={randomKeyGen()} id='job-title'>
                        {post.job_title}
                    </li> 
                    <li key={randomKeyGen()} id='company'>
                        {post.company}
                    </li>
                    <li key={randomKeyGen()}>
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