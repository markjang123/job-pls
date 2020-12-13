// import React from 'react';
// import UsersIndexItemContainer from './user_index_item_container';
// import './users_index.css';

// class UsersIndex extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { grow: true };
//         this.growshrink = this.growshrink.bind(this);
//         this.resize = this.resize.bind(this);
//     }

//     resize() {
//         this.setState({ grow: !this.state.grow });
//     }

//     growshrink() {
//         if (this.state.grow) {
//             return (
//                 'users-index-item-container'
//             )
//         } else {
//             return (
//                 'shrink'
//             )
//         }
//     }

//     render() {
//         if (this.props.currentUser === undefined) return null;

//         return (
//             <div className='users-index'>
//                 <div className={this.growshrink()}>
//                     {this.props.users.map(user => {
//                         return <UsersIndexItemContainer key={user._id} user={user} />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

// export default UsersIndex

import React from 'react';
import UsersIndexItemContainer from './user_index_item_container';
import './users_index.css';

class UsersIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grow: true };
        this.growshrink = this.growshrink.bind(this);
        this.resize = this.resize.bind(this);
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    growshrink() {
        if (this.state.grow) {
            return (
                'users-index-item-container'
            )
        } else {
            return (
                'shrink'
            )
        }
    }

    render() {
        if (this.props.currentUser === undefined) return null;

        return (
            <div className='users-index'>
                <div className={this.growshrink()}>
                    {this.props.users.map(user => {
                        return <UsersIndexItemContainer key={user._id} user={user} />
                    })}
                </div>
            </div>
        )
    }
}

export default UsersIndex