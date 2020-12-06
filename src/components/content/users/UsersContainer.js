import React from 'react';
import {connect} from "react-redux";
import UserItem from "./userscontent/UserItem";
import {reset} from "redux-form";
import {getUsersThunkCreator} from "../../../redux/content/users/UsersReducer";
import {getUsersSelector} from "../../../redux/content/users/UsersSelectors";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    getUsers = () => {
        return this.props.users.map(user => <UserItem key={user.id}
                                                      avatar={'https://i.pinimg.com/236x/5f/6f/2a/5f6f2a6ea2f3682dc08ed886e44610cc.jpg'}
                                                      name={user.username}
                                                      role={user.role}/>)
    }

    render() {
        return (<div>
            {this.getUsers()}
        </div>)
    }
}

const mapStateToProps = (state) => ({
    users: getUsersSelector(state)
})

const mapDispatchToProps = ({
    getUsers: getUsersThunkCreator,
    resetForm: reset
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)

export default UsersContainer