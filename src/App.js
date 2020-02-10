import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Input  from './Components/Input'
import CompletedItems from './Components/CompletedItems'


import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todoList: []
    }
  }

// // these are all calls

  componentDidMount(){
    axios.get('/api/todo').then(res => {
      this.setState({
        todoList: res.data
      })
    }).catch(err => console.log(err))

  }


  addTodoItem = (input) => {
    axios.post('/api/todo', {input} ).then(res => {
      this.setState({
        todoList: res.data
      })
    }).catch(err => console.log(err))
  }


  editTodoItem = (id, todoItem) => {
    axios.put(`/api/todo/${id}`, {todoItem}).then(res => {
      this.setState({
        todoList: res.data
      })
    }).catch(err => console.log(err))
  }


  deleteTodoItem = (id) => {
    axios.delete(`/api/todo/${id}`).then(res => {
      this.setState({
        todoList: res.data
      })
    }).catch(err => console.log(err))
  }







  render () {
    const {todoList} = this.state

  return (
    <div className="App">
      <Header />
      <Input 
            todoList = {todoList} 
            addTodoItem = {this.addTodoItem}
            deleteTodoItem = {this.deleteTodoItem}
            editTodoItem = {this.editTodoItem}
            />
      <CompletedItems />
    </div>
  );

  }


}

export default App;