import React from 'react';

const TestRunItem = (props) => {
    return (<>
        <div>{`Test run name: ${props.name}`}</div>
        <div>{`Total tests number: ${props.testsNumber}`}</div>
    </>)
}

export default TestRunItem