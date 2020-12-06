import {axiosInstance} from "../AxiosInstance";

const getUsers = () => {
    return axiosInstance.get('/users').then(response => response.data)
}

const UsersApi = {
    getUsers
}

export default UsersApi