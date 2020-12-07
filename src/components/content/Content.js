import React from 'react';
import {Route} from "react-router-dom";
import css from './Content.module.css'
import CreateTestRunContainer from "./testruns/createtestrunpage/CreateTestRunContainer";

const TestsContainer = React.lazy(() => import("./tests/TestsContainer"))
const UsersContainer = React.lazy(() => import("./users/UsersContainer"))
const TestRunsContainer = React.lazy(() => import("./testruns/TestRunsContainer"))

const Content = () => {
    return (<div className={css.content}>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route expact path={'/testruns/:testRunId?'} render={() => <TestRunsContainer/>}/>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route expact path={'/addtestrun'} render={() => <CreateTestRunContainer/>}/>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route path={'/tests'} render={() => <TestsContainer/>}/>
        </React.Suspense>
    </div>)
}

export default Content