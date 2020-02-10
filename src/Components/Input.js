import React, {Component} from 'react'
import List from './List'


class Input extends Component{
   constructor(props){
      super(props)

      this.state = {
         input: ""
      }      
   }

   //handlechange ... how button reacts

   handleButton(){
      this.props.addTodoItem(this.state.input)
   }


   //handleInput... how input reacts

   handleInput(event){
      this.setState({input: event})
   }

   render(){
      
      console.log(this.state.input)
      return(
         <div>
            <button onClick = {() => this.handleButton()}>Save Item</button>
            <input onChange = {(e) => this.handleInput(e.target.value)}></input>
            <List 
                  todoList = {this.props.todoList}/> 
         </div>
      )
   }
   
}

export default Input