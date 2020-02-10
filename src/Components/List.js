import React from 'react'


function List(props) {

  let mapList = props.todoList.map((e,i) => {
      return (
         <div key={i}>
            <h2>  {e.lineItem}  </h2>
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