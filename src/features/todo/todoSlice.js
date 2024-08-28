import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text: "hello world"}]
}
// function sayHello() {
//     console.log("Hello");
    
// }

export const todoSlice  =createSlice({
    name: 'todo',
    initialState,
    reducers:{
        //it include property and function .ie addTodo, removeTodo
        addTodo:(state, action)=>{  //it need action and state , here we write definition also, umlike useContext which is only func without definition
            const todo = {
                id:nanoid(), 
                text: action.payload //payload  is a property in itself , we will give the action in text itself so no need to write payload.text
            }
            state.todos.push(todo)  //updating and editing the todo using state
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }, 
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer