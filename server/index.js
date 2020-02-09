const express = require('express')
const tc = require('./controllers/ToDoController')

const app = express()

const PORT = 4040

app.use(express.json())


// endpoints

app.get('/api/todo', tc.getTodoList)
         // if you have a second controller it could go here
app.post('/api/todo', tc.addTodoList)
app.put('/api/todo/:id', tc.editTodoList)
app.delete('/api/todo/:id', tc.deleteTodoItem)




app.listen(PORT, () => console.log(`Server is running on ${PORT}`))



