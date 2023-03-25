export const removePostMiddleware = (store) => (next) => (action) => {
    if(action.type === "removePost") {
        store.dispatch({type: "posts/removePost", payload: action.payload.id})
        store.dispatch({type: "users/removePost", payload: action.payload.id})
    }else {
        return next(action)
    }
} 

export const removePost = (payload) => {
    return {
        type: "removePost",
        payload: payload
    }
}