import React, {Component} from 'react'
import List from './List'


class Input extends Component{
   constructor(props){
      super(props)

      this.state = {
         input: "",
         toggleEdit: false,
         edit: ""
      }      
   }

   handleEditToggle = () => { 

      console.log(this) 

      this.setState({toggleEdit: !this.state.toggleEdit})
   }

                                                                                               // learn to bind sometime soon

   editUpdateItem = (id) => {
      this.props.editTodoItem(id, this.state.edit)
      this.setState({toggleEdit: !this.state.toggleEdit})
   }

   handleEdit = (event) => {
      this.setState({edit: event})
   }

   //handlechange ... how button reacts

   handleButton = () => {
      this.props.addTodoItem(this.state.input)
   }


   //handleInput... how input reacts

   handleInput = (event) =>{
      this.setState({input: event})
   }

   render(){
      
      console.log(this.state.input)
      return(
         <div>
            <button onClick = {() => this.handleButton()}>Save Item</button>
            <input onChange = {(e) => this.handleInput(e.target.value)}></input>
            <List 
                  todoList = {this.props.todoList}
                  deleteTodoItem = {this.props.deleteTodoItem}
                  handleEditToggle = {this.handleEditToggle}
                  toggleEdit = {this.state.toggleEdit}
                  editUpdateItem = {this.editUpdateItem}
                  edit = {this.state.edit}
                  handleEdit ={this.handleEdit}
                  /> 
         </div>
      )
   }
   
}

export default Input