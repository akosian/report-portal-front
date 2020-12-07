export const getTestRunsSelector = (state) => {
    return state.contentTestRuns.testRuns;
}

export const getTestRunsPageSizeSelector = () => {
    return 5;
}