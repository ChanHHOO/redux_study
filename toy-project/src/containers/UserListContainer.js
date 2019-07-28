import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import UserList from '../components/UserList';
import * as userAction from "../store/modules/header";

class UserListContainer extends Component{
    render(){
        const {userList, wrong_count} = this.props;

        return(
            <UserList
                userList={userList}
                wrongCount={wrong_count}
            />
        )

    }
}

const mapStateToProps = ({header})=>({
    userList:header.userList,
    wrong_count:header.wrong_count,
});
const mapDispatchToProps = dispatch => ({
    usersActions : bindActionCreators(userAction, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer);


