import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addPostMiddlewares } from "./middlewares/addPostMiddleware";
import { removePostMiddleware } from "./middlewares/removePostMiddleware";
import { postsReducer } from "./slices/posts/postsSlice";
import { usersReducer } from "./slices/users/usersSlice";
import { searchReducer } from "./slices/search/searchSlice"
import { searchMiddleware } from "./middlewares/searchMiddleware"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'merinstan',
    storage,
}

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewares) => ([
        ...getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), addPostMiddlewares, removePostMiddleware, searchMiddleware 
    ])
})

export const persistor = persistStore(store)

export default store;