import React from 'react';
import Inputs from './Components/Form';
import List from "./Components/List"
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      toDo: "",
      allToDos: []
    }
  }

  changeInput = (event) => {
    this.setState({
      toDo: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    let newToDo = {
      toDo: this.state.toDo
    }
    let toDoArr = [];
    for(let i of this.state.allToDos) {
      toDoArr.push(i)
    }
    toDoArr.push(newToDo)

    this.notifyAdded()

    this.setState({
      toDo: "",
      allToDos: toDoArr
    })
  }

  deleteToDo = (event) => {
    event.preventDefault();
    let newArr = [];
    for(let i of this.state.allToDos) {
      newArr.push(i);
    }

    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].toDo === event.target.id) {
        console.log("hi")
        this.notifyDelete(newArr[i].toDo)
        newArr.splice(i, 1)
      }
    }

    

    this.setState({
      allToDos: newArr
    })



  }

  notifyAdded = () => toast(`New to do added: ${this.state.toDo}`)
  notifyDelete = (el) => toast(`To do deleted: ${el}`)

  render() {
    const {toDo, allToDos} = this.state;

    const individualToDo = allToDos.map((element) => {
      return(
        <List 
          key={element.toDo}
          toDo={element.toDo}
          deleteToDo={this.deleteToDo}
          />
      )
    })
    return (
      <div className="App">
        <Inputs 
        toDo={toDo}
        changeInput={this.changeInput}
        handleFormSubmit={this.handleFormSubmit}
        />
        <ul>
          {individualToDo}
        </ul>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
