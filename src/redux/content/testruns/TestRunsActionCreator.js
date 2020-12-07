export const GET_TEST_RUNS = '/content/testruns/GET-TEST-RUNS';
export const ADD_TEST_RUN = '/content/testruns/ADD-TEST-RUN';

export const GetTestRunsAC = (testRuns) => ({
    type: GET_TEST_RUNS,
    testRuns: testRuns
})

export const AddTestRunAC = (name) => ({
    type: ADD_TEST_RUN,
    testRun: {
        name: name,
    }
})