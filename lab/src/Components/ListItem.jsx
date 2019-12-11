import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListItem extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        toast(`New to do added: ${this.props.toDo}`)
    }

    componentWillUnmount() {
        toast(`To do deleted: ${this.props.toDo}`)
    }

    render() {
        return(
            <div>
                <p>{this.props.toDo}</p>
                <button id={this.props.toDo} onClick={this.props.deleteToDo}>Delete</button>
            </div>
        )
    }
}

export default ListItem