import React from 'react';
import PostShowContainer from './post_show_container';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


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

    // modeFunc(post){
    //     const modalObject = ({
    //         type: 'post',
    //         modal: 'post',
    //         proc: post
    //     })
    //     console.log('logging the modal Object below:')
    //     console.log(modalObject)
    //     console.log('logging the modal Object above:')
    //     this.props.openModal(modalObject);
    // }

    modeFunc(props) {
        const modalObject = ({
            type: 'post',
            modal: 'post',
            proc: props
        })
        console.log('logging the modal Object below:')
        console.log(modalObject)
        console.log('logging the modal Object above:')
        // this.props.openModal(modalObject);
        this.props.openModal(modalObject);
    }





    render(){
        const { post } = this.props;
        // console.log(!!openModal);

        return(
            <div>
                {/* <Link to={`/jobs/${post._id}`}> */}
                <ul>
                    <li>{post.job_title}</li> 
                    <li>{post.company}</li>
                    <li>{post.salary}</li>
                </ul>
                <ul>
                    <li>{post.status}</li>
                </ul>
                <button onClick={() => this.modeFunc(this.props) }>Modal Time</button>
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