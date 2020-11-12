import React from 'react';
import { Link } from 'react-router-dom';
import NavSearchContainer from './nav_search_container';
import PostIndexContainer from '../postings/post_index_container';
import './nav.css'
// import SearchBarContainer from '../search/search_container';

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
        console.log('click');
        <PostIndexContainer openUsers={true}/>

    }



  

    render() {
        const {currentUser} = this.props
        if(Object.keys(currentUser).length === 0 && currentUser.constructor === Object) return null;

        return (
            <div className='nav-container'>
                <button onClick={() => this.props.logout()} className="logout-button">logout</button>
                        <div>
                            <NavSearchContainer/>
                        </div>
                        {/* </div> */}
                        {/* <div id='flex-tabs'>
                            <ul>
                                <li id='tab'><Link to='/jobs'>job pls</Link></li>
                                <li id='tab'><p onClick={() => this.openUsers()}>users</p></li>
                                <li id='tab'><Link to='/search'>search</Link></li>
                            
                            </ul>
                        </div> */}
                    {/* </div> */}
                {/* </div> */}

            </div>
        )
    }
}

export default Nav;
