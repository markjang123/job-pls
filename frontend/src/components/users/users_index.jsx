
import React from 'react';
import UsersIndexItemContainer from './user_index_item_container';
import { randomKeyGen } from '../../util/helper';
import './users_index.css';
import modalReducer from '../../reducers/modal_reducer';

class UsersIndex extends React.PureComponent {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

                                     

    render() {
        if (this.props.currentUser === undefined) return null;

        let { users } = this.props

        if ( users.length === 0 ){
            return(
                <div className='no-results'>
                    This container is empty! Oh no!
                </div>
            )
        } else {         
            return (
                <div className='users-index'>
                    <div className='users-index-item-container' onClick={e => e.stopPropagation()}>
                        {this.props.users.map(user => {
                            return <UsersIndexItemContainer key={randomKeyGen()} user={user} style={'user-show'} />
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default UsersIndex