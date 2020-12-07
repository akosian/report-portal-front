import {axiosInstance} from "../AxiosInstance";

const getTestRuns = () => {
    return axiosInstance.get('/testruns').then(response => response.data)
}

const addTestRun = (name) => {
    return axiosInstance.post('/testruns', {name: name}).then(response => response.data)
}

const TestRunsApi = {
    getTestRuns,
    addTestRun
}

export default TestRunsApi