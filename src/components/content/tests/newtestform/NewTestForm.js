import {Field, reduxForm} from "redux-form";
import React from 'react';

const NewTestForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <Field name='summary' placeholder='Enter test summary' component='input'/>
        <div>
            <button>Save</button>
        </div>
    </form>)
}

export default reduxForm({form: 'newTestForm'})(NewTestForm)