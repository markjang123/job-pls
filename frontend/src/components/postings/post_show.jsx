import React from 'react';
import PostEdit from './post_edit'


function PostShow({post}){
    
    function niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '')
        .replace(/;.../gm, "");
    }

        
    let job_desc;
    if (!post.snippet){
        job_desc = post.description
    } else {
        job_desc = post.snippet
    }
    
    return(
        <div className='post-show'>
            <p id='show-title'>{post.job_title}</p>
            <p id='show-company'>{post.company}</p>
            <p id='show-salary'>{post.salary}</p>
            <div className='description-container'>
                <p>{niceDescription(job_desc)}</p>
            </div>
            <PostEdit 
                post={post}
            />
        </div>
    )
}


export default PostShow;