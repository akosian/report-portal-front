
const TestItem = (props) => {
    return (<div>
        <div>{props.summary}</div>
        <div>{!props.steps ? 'No steps' : props.steps}</div>
    </div>)
}

export default TestItem