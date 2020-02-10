import React, {Component} from 'react'

class CompletedItems extends Component{
   constructor(props){
      super(props)

      this.state = {
         completedCompiled: []

      }
   }

   
   render (){

      let completedList = this.props.itemsCompletedSaved.map((e) => {
         console.log(e)
         return <p className="lineItemsCompleted">{e.lineItem}</p>
      } )

      return(
         <section className="CompletedItems">

            <h1>Items Completed!</h1>            
            <strike>{completedList}</strike>

         </section>
      )
   }
}

// function CompletedItems() {
//    return (
//      <div className="CompletedItems">
//         <h1>Items Completed!</h1>
//      </div>
//    );
//  }
 
 export default CompletedItems;