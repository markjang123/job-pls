import React from 'react';
import { Link } from 'react-router-dom';
import NavSearchContainer from './nav_search_container';
import PostIndexContainer from '../postings/post_index_container';
import './nav.css'
// import SearchBarContainer from '../search/search_container';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.openUsers = this.openUsers.bind(this);
    }

    openUsers(){
        <PostIndexContainer openUsers={true}/>
    }

    render() {
        const {currentUser} = this.props
        if (currentUser._id === undefined) return null;

        return (
            <div className='nav-container'>
                <div id='job-pls-logo' onClick={() => this.props.history.push('/jobs')}></div>
                <button onClick={() => this.props.logout()} className="logout-button">logout</button>
                    <div>
                        <NavSearchContainer/>
                    </div>
            </div>
        )
    }
}

export default Nav;
