import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        todo: todoSlice,
        post: postSlice
    },
})
