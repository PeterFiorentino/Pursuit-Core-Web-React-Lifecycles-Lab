import React from 'react';

const Inputs = (props) => {
    return(
        <form onSubmit={props.handleFormSubmit}>
            <input type="text" value={props.toDo} onChange={props.changeInput}></input>
        </form>
    )
}

export default Inputs;