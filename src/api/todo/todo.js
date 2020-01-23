const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})


var Todo = restful.model('Todo', todoSchema)
const todo = new Todo();
todo.validate().catch(error => {
    console.log(`error: ${error}`)
    
   
  });

module.exports = Todo