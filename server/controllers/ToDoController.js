let todoList = [{id: 1, lineItem: 'laundry'}, {id:2, lineItem: 'pick up toast'}, {id: 3, lineItem: 'hunt a squirrel'}]
let id = 4  // we will commit to add 3 pieces of dummy data

module.exports = {

getTodoList: (req, res) => {
   res.status(200).send(todoList)
},


addTodoList: (req, res) => {
   const {todoItem} = req.body
   todoList.id = id
   id++

   todoList.unshift(todoitem)

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

   todoList.splice(index, 1)

   res.status(200).send(todoList)

}








}