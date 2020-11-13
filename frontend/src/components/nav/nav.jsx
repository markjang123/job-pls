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
        const {currentUser} = this.props;
        if(Object.keys(currentUser).length === 0 
            && currentUser.constructor === Object) return null;

        return (
            <div className='nav-container'>
                <button 
                    onClick={this.props.logout} 
                    className="logout-button">
                        logout
                </button>
                <div>
                    <NavSearchContainer/>
                </div>
            </div>
        )
    }
}

export default Nav;
