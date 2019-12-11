import React from 'react';

const ListItem = (props) => {
    return(
        <div>
            <p>{props.toDo}</p>
            <button id={props.toDo} onClick={props.deleteToDo}>Delete</button>
        </div>
    )
}

export default ListItem