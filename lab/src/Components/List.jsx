import React from 'react';
import ListItem from './ListItem';



const individualToDo = (props) => {

    return(
        props.allToDos.map((element) => {
        return(
            <ListItem 
                key={element.toDo}
                toDo={element.toDo}
                deleteToDo={props.deleteToDo}
                />
            )
        })
    )
}

export default individualToDo;