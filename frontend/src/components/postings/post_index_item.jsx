import React from 'react';
import { randomKeyGen } from '../../util/helper';
import Logo from '../nav/logo192.png';
import './post.css';
import { useDispatch} from 'react-redux'
import { openModal } from '../../actions/modal_actions';



function PostIndexItem({post}){
    const dispatch = useDispatch()


    function modeFunc(post){
        const modalObject = ({
            type: 'post',
            modal: 'post',
            post: post
        })
        dispatch(openModal(modalObject))
        document.body.style.position = 'fixed';
    }

    return(
        <div className='job' onClick={() => modeFunc(post)}>
            <div className='post-upper-info-container'>
                <div className='upper-image-and-title'>
                    {
                        post.company_logo 
                        ?<img className='search-card-company-logo' src={post.company_logo}/>
                        :<img className='search-card-company-logo' src={Logo}/>
                    }
                    <div>{post.job_title}</div>
                </div>
                <ul>
                    <li key={randomKeyGen()} id='company'>
                        {post.company}
                    </li>
                    <li key={randomKeyGen()}>
                        {post.status}
                    </li>
                </ul>                    
            </div>

            <p id='salary'>
                {post.salary}
            </p>
        </div>
    )
}



export default PostIndexItem;