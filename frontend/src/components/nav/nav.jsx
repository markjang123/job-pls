import React from 'react';
import NavSearchContainer from './nav_search_container';
import PostIndexContainer from '../postings/post_index_container';
import './nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.openUsers = this.openUsers.bind(this);
    }

    openUsers(){
        <PostIndexContainer openUsers={true}/>
    }

    render() {
        const {currentUser} = this.props;
        if (currentUser._id === undefined) return null;

        return (
            // <div className='nav-container'>
                        <NavSearchContainer/>
            // </div>
        )
    }
}

export default Nav;
