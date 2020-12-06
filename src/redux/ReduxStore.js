import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {reducer} from 'redux-form'
import UsersReducer from "./content/users/UsersReducer";
import TestsReducer from "./content/tests/TestsReducer";
import TestRunsReducer from "./content/testruns/TestRunsReducer";

const reducers = combineReducers({
    contentUsers: UsersReducer,
    contentTests: TestsReducer,
    contentTestRuns: TestRunsReducer,
    form: reducer
})

export default createStore(reducers, applyMiddleware(thunk))