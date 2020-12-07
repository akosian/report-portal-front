import {ADD_TEST_RUN, AddTestRunAC, GET_TEST_RUNS, GetTestRunsAC} from "./TestRunsActionCreator";
import TestRunsApi from "../../../api/testruns/TestRunsApi";

const initialState = {
    testRuns: []
}

const getTestRuns = (state, testRuns) => {
    return {
        ...state,
        testRuns: testRuns
    }
}

const addTestRun = (state, testRun) => {
    return {
        ...state,
        testRuns: [...state.testRuns, testRun]
    }
}

export const getTestRunsThunkCreator = () => async (dispatch) => {
    let testRuns = await TestRunsApi.getTestRuns()
    dispatch(GetTestRunsAC(testRuns))
}

export const addTestRunThunkCreator = (name) => async (dispatch) => {
    let testRun = await TestRunsApi.addTestRun(name)
    dispatch(AddTestRunAC(testRun))
}

const TestRunsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST_RUNS:
            return getTestRuns(state, action.testRuns)
        case ADD_TEST_RUN:
            return addTestRun(state, action.testRun)
        default:
            return state
    }
}

export default TestRunsReducer