import React from 'react';
import PostShowContainer from './post_show_container';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import './post.css'


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
        console.log(post.job_title)
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
                    <li id='job-title'>{post.job_title}</li> 
                    <li id='company'>{post.company}</li>
                    <li>{post.status}</li>
                </ul>
                    <p id='salary'>{post.salary}</p>
                
    
            </div>
        )
        // return (
        //     <div>
        //         {/* <Link to={`/jobs/${post._id}`}> */}
        //         <ul>
        //             <li>{this.props.post.job_title}</li>
        //             <li>{this.props.post.company}</li>
        //             <li>{this.props.post.salary}</li>
        //         </ul>
        //         <ul>
        //             <li>{this.props.post.status}</li>
        //         </ul>
        //         {/* </Link> */}
        //         {/* <button onClick={() => openModal(post)}>Modal Time</button> */}
        //         {console.log('Logging props from PostIndexItem below:')}
        //         {console.log(this.props)}
        //         {console.log('Logging props from PostIndexItem above:')}
        //         <button onClick={() => this.modeFunc(post)}>Modal Time</button>
        //     </div>
        // )
    }
}

export default PostIndexItem;