import React from 'react';
// import { fetchUsers } from '../../actions/session_actions'

class Users extends React.Component{
    constructor(props){
        super(props)
        // this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.banana();
    }

    render() {
        // {check}
        const { users, openModal, closeModal, modal, currentUser } = this.props;
        // if (pin === undefined) return null;
        if (users === undefined) return null;

        return (
            <div className='index-container'>
                <div>
                    <h1 onClick={() => console.log('click')} >HELLO</h1>
                </div>
                <ul>

                </ul>
                {users.map(user => (
                    <li>
                        {user.username}
                    </li>
                    // <UserIndexItem
                    //     user={user}
                    //     key={user._id}
                    //     currentUser={currentUser}
                    //     modal={modal}
                    //     openModal={openModal}
                    //     closeModal={closeModal}
                    // />
                ))}
            </div>
        )
    }
}

export default Users