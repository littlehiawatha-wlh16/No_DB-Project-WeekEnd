// let todoList = [{id: 1, lineItem: 'Make the Bed'}, {id:2, lineItem: 'Brush Your Teeth'}, {id: 3, lineItem: 'Take a Shower'}]
// let id = 4  // we will commit to add 3 pieces of dummy data

let todoList = []
let itemsCompletedSaved = []
let id = 0



module.exports = {

getTodoList: (req, res) => {
   res.status(200).send(todoList)
},


addTodoList: (req, res) => {
                                                          console.log(req.body)
   const {input} = req.body
   const savedItem = {id: id,
                     lineItem: input
                     }
   id++

   todoList.unshift(savedItem)
                                                         console.log(todoList)
   res.status(200).send(todoList)
},


editTodoList: (req, res) => {
   const {id} = req.params
   const {todoItem} = req.body

   const index = todoList.findIndex(e => {
      return e.id === +id
   })

   todoList[index].lineItem = todoItem
   res.status(200).send(todoList)
},


deleteTodoItem: (req, res) => {
   const {id} = req.params

   const index = todoList.findIndex(e => {
      return e.id === +id
   })

   itemsCompletedSaved.push(todoList[index])

   todoList.splice(index, 1)

   res.status(200).send([todoList, itemsCompletedSaved])

}








}