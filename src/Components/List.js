import React from 'react'


function List(props) {

  let mapList = props.todoList.map((e,i) => {
      return (
         <div key={i} className = "editAndDelete" >
            <button onClick = {() => props.deleteTodoItem(e.id)}>Completed</button>
               {
               props.toggleEdit === true ?
               <div >
                     
                  <button onClick = {() => props.editUpdateItem(e.id)}>Save Update</button>
                  <input placeholder={e.lineItem} onChange = { (e) => props.handleEdit(e.target.value)}/>
               </div>
            :
            <div className = "editAndDelete">      
            <button onClick = {() => props.handleEditToggle() }>Edit</button>
            <h2>  {e.lineItem}  </h2>
            </div>
         }
         </div>
         )
   })

   return (
     <div className="List">
        {mapList}
     </div>
   );
 }
 
 export default List;