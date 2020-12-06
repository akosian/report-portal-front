import {GET_USERS, SetUsersAC} from "./UsersActionCreator";
import UsersApi from "../../../api/users/UsersApi";

const initialState = {
    users: []
}

const setUsers = (state, users) => {
    return {
        ...state,
        users: users
    }
}

export const getUsersThunkCreator = () => async (dispatch) => {
    let users = await UsersApi.getUsers()
    dispatch(SetUsersAC(users))
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return setUsers(state, action.users)
        default:
            return state;
    }
}

export default UsersReducer