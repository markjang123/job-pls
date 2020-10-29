import React from 'react'
import './users_index.css'
import UsersIndexItem from './user_index_item'
class UsersIndex extends React.Component {
    render(){
        let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        return <ul className="users-index">
            {testArr.map(ele => {
                return <UsersIndexItem />
            })
        }
        </ul>
        
    }
}

export default UsersIndex