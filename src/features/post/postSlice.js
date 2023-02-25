import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const defaultState = {
    posts: [],
}

export const getPosts = createAsyncThunk(
    'posts/getPosts', // slice name + / + function name
    async (_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState: defaultState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fulfilled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
    }
})

export const {setPosts} = postSlice.actions
export default postSlice.reducer
