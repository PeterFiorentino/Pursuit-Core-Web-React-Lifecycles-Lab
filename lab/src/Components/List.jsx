import React from 'react';

const List = (props) => {
    return(
        <li>
            <p>{props.toDo}</p>
            <button id={props.toDo} onClick={props.deleteToDo}>Delete</button>
        </li>
    )
}

export default List