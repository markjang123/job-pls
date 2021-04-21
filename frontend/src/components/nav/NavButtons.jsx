import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import './nav.css';
import logo from './logo192.png'


function NavButtons(){
    
    const isCurrentUser = useSelector((state => state.session.user))
    const currentUser = Object.values(isCurrentUser).length === 0 ? false : isCurrentUser
    const dispatch = useDispatch()
    const history = useHistory()

    if (currentUser){
        return <div className='nav-buttons'>
                    <div className='nav-user-info'>
                        <div className='nav-user-greeting'>

                            <img id='logo' src={logo}></img>
                            Hello, {currentUser.username}
                        </div>
                        <div id='job-pls-logo' onClick={() => history.push('/jobs')}> My jobs</div>
                    </div>
                    <button onClick={() => dispatch(logout())} className="logout-button">logout</button>
                </div>
    }
    return null
}

export default NavButtons;
