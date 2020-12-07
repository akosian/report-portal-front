import React from 'react';

const TestItem = (props) => {
    return (<tr>
        <td>{props.id}</td>
        <td>{props.summary}</td>
    </tr>)
}

export default TestItem