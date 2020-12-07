import React from 'react';
import css from './TestItemsTable.module.css'
import TestItem from "./TestItem";

const TestItemsTable = (props) => {
    return (<div className={css.item}>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Summary</th>
            </tr>
            </thead>
            <tbody>
            {props.tests.map(test => <TestItem key={test.id} id={test.id} summary={test.summary}/>)}
            </tbody>
        </table>
    </div>)
}

export default TestItemsTable