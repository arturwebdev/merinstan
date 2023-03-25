import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsApi";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsData: []
    },
    reducers: {
        addComment(state, {payload: {id, body, username}}){
            const idx = state.findIndex(post => post.id === id)
            state[idx].comments.push({
                id: new Date().getTime().toString(),
                body,
                username
            })
        },
        addPost(state, {payload}) {
            state.postsData.unshift(payload)
        },
        removePost(state, {payload}) {
            state.postsData = [...state.postsData.filter(post => post.id !== payload)]
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.postsData = [...payload]
        }
    }
})

export const selectPosts = state => state.posts;
export const {addComment, addPost, removePost} = postsSlice.actions;
export const postsReducer = postsSlice.reducer