import React from 'react';
import css from './TestRunsItem.module.css'
import TestItemsTable from "./testitem/TestItemsTable";

const TestRunsItem = (props) => {
    return (<div className={`${css.content}`}>
        <div className={css.item}><span>{`${props.name}`}</span></div>
            {!props.tests || props.tests.length < 1
                ? 'There is no linked tests to current test run'
                : <TestItemsTable tests={props.tests}/>}
    </div>)
}

export default TestRunsItem