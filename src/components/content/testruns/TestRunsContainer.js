import React from 'react';
import Css from './TestRunsContainer.module.css'
import {connect} from "react-redux";
import {getTestRunsPageSizeSelector, getTestRunsSelector} from "../../../redux/content/testruns/TestRunsSelectors";
import TestRunItem from "./testrunscontent/TestRunsItem";
import {reset} from "redux-form";
import {addTestRunThunkCreator, getTestRunsThunkCreator} from "../../../redux/content/testruns/TestRunsReducer";
import Paginator from "../../common/Paginator";
import {NavLink} from "react-router-dom";

class TestRunsComponent extends React.Component {

    componentDidMount() {
        this.props.getTestRuns()
    }

    render() {
        return (<div className={Css.item}>
            <div>
                <NavLink to={'/addtestrun'}>Add New Test Run</NavLink>
            </div>
            <br/>
            <Paginator totalCount={this.props.testRuns.length} pageSize={this.props.pageSize}/>
            <div>
                {this.props.testRuns.map(testRun => <TestRunItem key={testRun.id} name={testRun.name}
                                                                 tests={testRun.tests}/>)}
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    testRuns: getTestRunsSelector(state),
    pageSize: getTestRunsPageSizeSelector()
})

const mapDispatchToProps = ({
    getTestRuns: getTestRunsThunkCreator,
    addNewTestRun: addTestRunThunkCreator,
    resetForm: reset
})

const TestRunsContainer = connect(mapStateToProps, mapDispatchToProps)(TestRunsComponent)

export default TestRunsContainer