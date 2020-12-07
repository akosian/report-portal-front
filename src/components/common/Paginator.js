import React from 'react';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    if (pagesCount > 5) {
        for (let i = 1; i < 5; i++) {
            pages.push(i)
        }
        pages.push(pagesCount)
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return (<div>
        {pages.map(p => <button key={p}>{p}</button>)}
    </div>)
}

export default Paginator