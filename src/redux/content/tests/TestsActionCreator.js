export const ADD_TEST = '/content/tests/ADD-TEST';
export const GET_TESTS = '/content/tests/GET-TESTS'

export const AddTestAC = (test) => ({
    type: ADD_TEST,
    test: test
})

export const GetTestsAC = (tests) => ({
    type: GET_TESTS,
    tests: tests
})