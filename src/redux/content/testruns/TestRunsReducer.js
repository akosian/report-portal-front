import {ADD_TEST_RUN, GET_TEST_RUNS} from "./TestRunsActionCreator";

const initialState = {
    testRuns: [
        {id: 1, name: 'First Test Run', testsNumber: 1},
        {id: 2, name: 'Second Test Run', testsNumber: 1}
    ]
}

const getTestRuns = (state) => {
    return {
        ...state
    }
}

const addTestRun = (state, data) => {
    return {
        ...state,
        testRuns: [...state.testRuns, data]
    }
}

const TestRunsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST_RUNS:
            return getTestRuns(state)
        case ADD_TEST_RUN:
            return addTestRun(state, action.data)
        default:
            return state
    }
}

export default TestRunsReducer