import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersApi";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null,
        messages: [],
        currentDialog: [],
        activeChatUserId: null
    },
    reducers: {
        logIn(state, { payload: { login, password } }) {
            const user = state.usersData.find(user => (user.email === login || user.username === login) && user.password === password)
            state.currentUser = user || null
            state.usersData = [...state.usersData.filter(user => user.id !== state.currentUser.id)]
        },

        logOut(state) {
            state.usersData.push(state.currentUser)
            state.currentUser = null
            state.currentDialog = []
            state.activeChatUserId = null
        },


        register(state, { payload }) {
            state.usersData.push({
                id: new Date().getTime().toString(),
                name: payload.name,
                username: payload.username,
                avatar: payload.avatar,
                email: payload.email,
                password: payload.password,
                bio: payload.bio,
                followers: Math.round(Math.random() * 400 + 500),
                following: Math.round(Math.random() * 400 + 500),
                posts: []
            })
        },

        startMessage(state, { payload }) {
            state.activeChatUserId = payload.id
            state.currentDialog = state.messages.filter(mesage => (mesage.toId === payload.id && mesage.fromId === state.currentUser.id) || (mesage.toId === state.currentUser.id && mesage.fromId === payload.id))
        },

        newMessage(state, { payload }) {
            state.messages.unshift({
                id: payload.id,
                toId: state.activeChatUserId,
                fromId: state.currentUser.id,
                body: payload.body
            })
            state.currentDialog.push({
                id: payload.id,
                toId: state.activeChatUserId,
                fromId: state.currentUser.id,
                body: payload.body
            })
        },

        addPost(state, {payload}) {
            state.currentUser.posts.unshift(payload)
        },

        removePost(state, {payload}) {
            state.currentUser.posts = [...state.currentUser.posts.filter(post => post.id !== payload)]
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            state.usersData = [...payload]
        }
    }
})

export const selectUsers = state => state.users;
export const {removePost, addPost, logIn, startMessage, newMessage, logOut, register } = usersSlice.actions;
export const usersReducer = usersSlice.reducer