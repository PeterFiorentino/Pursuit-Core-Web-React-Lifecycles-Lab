import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.handleFormSubmit}>
            <input type="text" value={props.toDo} onChange={props.changeInput}></input>
        </form>
    )
}

export default Form;