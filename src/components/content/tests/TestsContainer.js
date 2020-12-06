import {getTestsSelector} from "../../../redux/content/tests/TestSelectors";
import {connect} from "react-redux";
import React from 'react'
import NewTestForm from "./newtestform/NewTestForm";
import TestItem from "./testscontent/TestItem";
import {reset} from "redux-form";
import {AddTestThunkCreator, GetTestsThunkCreator} from "../../../redux/content/tests/TestsReducer";

class TestsComponent extends React.Component {

    componentDidMount() {
        this.props.getTests()
    }

    onSubmit = (data) => {
        this.props.addTest(data.summary)
        this.props.resetForm('newTestForm')
    }

    render() {
        let tests = this.props.tests.map(test => <TestItem key={test.id} summary={test.summary} steps={test.steps}/>)

        return (<>
            {tests}
            <NewTestForm onSubmit={this.onSubmit}/>
        </>)
    }
}

const mapStateToProps = (state) => ({
    tests: getTestsSelector(state)
})

const mapDispatchToProps = ({
    getTests: GetTestsThunkCreator,
    addTest: AddTestThunkCreator,
    resetForm: reset
})

const TestsContainer = connect(mapStateToProps, mapDispatchToProps)(TestsComponent)

export default TestsContainer