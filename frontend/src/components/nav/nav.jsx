import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

  

    render() {
        console.log('currentUser:')
        console.log(this.props.currentUser)

        if (this.props.currentUser === undefined) return null;

        return (
            <div className='nav-container'>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
