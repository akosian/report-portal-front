export const GET_TEST_RUNS = '/content/testruns/GET-TEST-RUNS';
export const ADD_TEST_RUN = '/content/testruns/ADD-TEST-RUN';

export const GetTestRunsAC = () => ({
    type: GET_TEST_RUNS
})

export const AddTestRunAC = (name, testsNumber) => ({
    type: ADD_TEST_RUN,
    data: {
        id: 3,
        name: name,
        testsNumber: testsNumber
    }
})