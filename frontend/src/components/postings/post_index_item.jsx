import React from 'react';
import PostShowContainer from './post_show_container';
import { randomKeyGen } from '../../util/helper';
import Logo from '../nav/logo192.png';
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
                <div className='post-upper-info-container'>
                    <div className='upper-image-and-title'>

                        <div className='card-header'>
                            <div className='card-logo'>
                            {
                                post.company_logo 
                                ?<img className='search-card-company-logo' src={post.company_logo}/>
                                :<img className='search-card-company-logo' src={Logo}/>
                            }
                            </div>
                            <div className='card-job-title'>
                                {post.job_title}
                            </div>
                        </div>
                        <div className='card-job-details'>
                            <div key={randomKeyGen()} id='company'>
                                {post.company}
                            </div>
                            <div key={randomKeyGen()}>
                                {post.status}
                            </div>
                        </div>                    
                    </div>
                </div>

                <p id='salary'>
                    {post.salary}
                </p>
            </div>
        )
    }
}


export default PostIndexItem;