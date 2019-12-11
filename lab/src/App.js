import React from 'react';
import Form from './Components/Form';
import List from "./Components/List"
import './App.css';
import { ToastContainer } from 'react-toastify';



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
        newArr.splice(i, 1)
      }
    }

    

    this.setState({
      allToDos: newArr
    })



  }

  render() {
    const {toDo, allToDos} = this.state;

    return (
      <div className="App">
        <Form 
        toDo={toDo}
        changeInput={this.changeInput}
        handleFormSubmit={this.handleFormSubmit}
        />
        <List 
        allToDos={allToDos}
        deleteToDo={this.deleteToDo}/>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
