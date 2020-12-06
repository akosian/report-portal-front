import {ADD_TEST, AddTestAC, GET_TESTS, GetTestsAC} from "./TestsActionCreator";
import TestsApi from "../../../api/tests/TestsApi";

const initialState = {
    tests: []
}

const addTest = (state, test) => {
    return {
        ...state,
        tests: [...state.tests, test]
    }
}

const getTests = (state, tests) => {
    return {
        ...state,
        tests: tests
    }
}

export const AddTestThunkCreator = (summary) => async (dispatch) => {
    let addedTest = await TestsApi.addTest(summary)
    dispatch(AddTestAC(addedTest))
}

export const GetTestsThunkCreator = () => async (dispatch) => {
    let tests = await TestsApi.getTests()
    dispatch(GetTestsAC(tests))
}

const TestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEST:
            return addTest(state, action.test)
        case GET_TESTS:
            return getTests(state, action.tests)
        default:
            return state
    }
}

export default TestsReducer