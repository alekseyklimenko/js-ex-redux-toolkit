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
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer
