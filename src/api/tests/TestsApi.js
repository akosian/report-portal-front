import {axiosInstance} from "../AxiosInstance";

const getTests = () => {
    return axiosInstance.get('/tests').then(response => response.data)
}

const addTest = (summary) => {
    return axiosInstance.post('/tests', {summary: summary}).then(response => response.data)
}

const TestsApi = {
    getTests,
    addTest
}

export default TestsApi