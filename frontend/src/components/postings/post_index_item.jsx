import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
        //modal goes here
    }


    render(){
        const { post } = this.props;

        return(
            <div>
                <ul>
                    <li>{post.title}</li> 
                    {/* {need to add post.title to schema} */}
                    <li>{post.company}</li>
                    <li>{post.salary}</li>
                </ul>
                <ul>
                    <li>{post.status}</li>
                </ul>
            </div>
        )
    }
}