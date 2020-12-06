import React from 'react';
import {Field, reduxForm} from "redux-form";

const NewTestRunForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name='name' placeholder='Enter test run name' component='input'/>
        </div>
        <div>
            <Field name='testsNumber' placeholder='Enter tests number' component='input'/>
        </div>
        <div>
            <button>Create</button>
        </div>
    </form>)
}

export default reduxForm({form: 'newTestRunForm'})(NewTestRunForm);