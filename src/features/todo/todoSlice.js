import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: defaultState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompletedTodo: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTodo, toggleCompletedTodo} = todoSlice.actions
export default todoSlice.reducer
