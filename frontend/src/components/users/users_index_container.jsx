import React from 'react'
import UsersIndex from './users_index'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        test: "test"
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        test: "test"
    }
}

const UsersIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
export default UsersIndexContainer