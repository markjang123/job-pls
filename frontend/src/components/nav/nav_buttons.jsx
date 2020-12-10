import React from 'react';
import './nav.css';
// import NavButtonsContainer from './nav_buttons_container';
// import SearchBarContainer from '../search/search_container';

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props
        if (currentUser._id === undefined) return null;
    
        return (
            <div className='nav-buttons'>
                <div id='job-pls-logo' onClick={() => this.props.history.push('/jobs')}> My jobs</div>
                <button onClick={() => logout()} className="logout-button">logout</button>
                
            </div>
        )
    }
}

export default NavButtons;
