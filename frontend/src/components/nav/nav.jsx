import React from 'react';
import { Link } from 'react-router-dom';
import NavSearchContainer from './nav_search_container';
import PostIndexContainer from '../postings/post_index_container';
import './nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.openUsers = this.openUsers.bind(this);
    }

    handleLogout(){
        this.props.logout()
    }

    openUsers(){
        // debugger
        console.log('click');
        <PostIndexContainer openUsers={true}/>

    }



  

    render() {
        const {currentUser} = this.props
        if(Object.keys(currentUser).length === 0 && currentUser.constructor === Object) return null;
        // if (this.props.currentUser === {}) return null;

        return (
            <div className='nav-container'>
                <NavSearchContainer />
                <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
                <h3 className="user-greeting">Hello, {currentUser.username}</h3>
                
                <div>
                    <div id='flex-tabs'>
                        {/* <div id='tab'>
                            <Link to='/jobs'>job pls</Link>
                        </div> */}
                        {/* <div id='tab'>
                            <Link to='/users'>users</Link>
                        </div> */}
                        {/* <div id='tab'>
                            <p onClick={() => this.openUsers()}>users</p>
                        </div> */}
                        {/* <div id='tab'>
                            <Link to='/search'>search</Link>
                        </div> */}
                        {/* <div id='tab'>
                            <button onClick={this.handleLogout}>Logout</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
