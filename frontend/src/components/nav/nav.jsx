import React from 'react';
import { Link } from 'react-router-dom';
import NavSearchContainer from './nav_search_container';
import './nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout()
    }
  

    render() {
        const {currentUser} = this.props
        if(Object.keys(currentUser).length === 0 && currentUser.constructor === Object) return null;
        // if (this.props.currentUser === {}) return null;

        return (
            <div className='nav-container'>

                <NavSearchContainer />
                
                <div>
                    {/* <h1 onClick={() => console.log('click')} >HELLO</h1>
                    <button onClick={this.props.logout}>LOG OUT</button>
                <Link to='/users'>All Users</Link> */}
                    <div id='flex-tabs'>
                        <div id='tab'>
                            <Link to='/jobs'>job pls</Link>
                        </div>
                        <div id='tab'>
                            <Link to='/users'>users</Link>
                        </div>
                        <div id='tab'>
                            <Link to='/search'>search</Link>
                        </div>
                        <div id='tab'>
                            <button onClick={this.handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
