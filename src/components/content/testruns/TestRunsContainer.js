import React from 'react';
import {connect} from "react-redux";
import {getTestRunsSelector} from "../../../redux/content/testruns/TestRunsSelectors";
import TestRunItem from "./testrunscontent/TestRunsItem";
import {reset} from "redux-form";
import {AddTestRunAC, GetTestRunsAC} from "../../../redux/content/testruns/TestRunsActionCreator";
import NewTestRunForm from "./newtestrunform/NewTestRunForm";

const TestRunsComponent = React.memo((props) => {

    const onSubmit = (data) => {
        props.addNewTestRun(data.name, data.testsNumber)
        props.resetForm('newTestRunForm')
    }

    return (<div>
        {props.testRuns.map(testRun => <TestRunItem key={testRun.id} name={testRun.name}
                                                    testsNumber={testRun.testsNumber}/>)}
        <NewTestRunForm onSubmit={onSubmit}/>
    </div>)
})

const mapStateToProps = (state) => ({
    testRuns: getTestRunsSelector(state)
})

const mapDispatchToProps = ({
    getTestRuns: GetTestRunsAC,
    addNewTestRun: AddTestRunAC,
    resetForm: reset
})

const TestRunsContainer = connect(mapStateToProps, mapDispatchToProps)(TestRunsComponent)

export default TestRunsContainer