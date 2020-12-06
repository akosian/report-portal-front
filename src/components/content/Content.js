import React from 'react';
import {Route} from "react-router-dom";
import css from './Content.module.css'
import UsersContainer from "./users/UsersContainer";
import TestRunsContainer from "./testruns/TestRunsContainer";
const TestsContainer = React.lazy(() => import("./tests/TestsContainer"))

const Content = () => {
    return (<div className={css.content}>
        <Route path={'/users'} render={() => <UsersContainer/>}/>
        <Route path={'/testruns'} render={() => <TestRunsContainer/>}/>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route path={'/tests'} render={() => <TestsContainer/>}/>
        </React.Suspense>
    </div>)
}

export default Content