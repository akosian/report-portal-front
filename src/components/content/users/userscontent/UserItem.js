import React from 'react';
import css from './UserItem.module.css'

const UserItem = (props) => {
    return (<div className={css.item}>
        <div>
            <img src={props.avatar}/>
            <span>{props.name}</span>
        </div>
        <div>
            <span>{props.role}</span>
        </div>
    </div>)
}

export default UserItem