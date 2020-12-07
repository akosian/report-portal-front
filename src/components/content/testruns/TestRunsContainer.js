import React from 'react';
import {connect} from "react-redux";
import {getTestRunsSelector} from "../../../redux/content/testruns/TestRunsSelectors";
import TestRunItem from "./testrunscontent/TestRunsItem";
import {reset} from "redux-form";
import NewTestRunForm from "./newtestrunform/NewTestRunForm";
import {addTestRunThunkCreator, getTestRunsThunkCreator} from "../../../redux/content/testruns/TestRunsReducer";

class TestRunsComponent extends React.Component {

    componentDidMount() {
        this.props.getTestRuns()
    }

    onSubmit = (data) => {
        this.props.addNewTestRun(data.name)
        this.props.resetForm('newTestRunForm')
    }

    render() {
        return (<div>
            {this.props.testRuns.map(testRun => <TestRunItem key={testRun.id} name={testRun.name}/>)}
            <NewTestRunForm onSubmit={this.onSubmit}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    testRuns: getTestRunsSelector(state)
})

const mapDispatchToProps = ({
    getTestRuns: getTestRunsThunkCreator,
    addNewTestRun: addTestRunThunkCreator,
    resetForm: reset
})

const TestRunsContainer = connect(mapStateToProps, mapDispatchToProps)(TestRunsComponent)

export default TestRunsContainer