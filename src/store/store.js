import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todoSlice
    },
})
