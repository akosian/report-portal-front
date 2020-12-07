import React from 'react';
import {connect} from "react-redux";
import NewTestRunForm from "./NewTestRunForm";
import {compose} from "redux";
import {withRouter} from "react-router";
import {addTestRunThunkCreator} from "../../../../redux/content/testruns/TestRunsReducer";
import {reset} from "redux-form";

class CreateTestRunComponent extends React.Component {

    onSubmit = (data) => {
        this.props.addTestRun(data.name)
        this.props.resetForm('newTestRunForm')
        this.props.history.push('/testruns');
    }

    render() {
        return (<div>
            <h1>Create new Test run</h1>
            <NewTestRunForm onSubmit={this.onSubmit}/>
        </div>)
    }
}

const mapDispatchToProps = {
    addTestRun: addTestRunThunkCreator,
    resetForm: reset
}

const CreateTestRunContainer = compose(withRouter, connect(() => ({}), mapDispatchToProps))(CreateTestRunComponent)

export default CreateTestRunContainer