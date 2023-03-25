export const addPostMiddlewares = (store) => (next) => (action) => {
    if(action.type === "addPost") {
        const currentPost = {
            id: new Date().getTime().toString(),
            img: action.payload.img,
            name: action.payload.username,
            likesCount: Math.round(Math.random() * 300 + 500),
            postText: action.payload.description,
            timeAgo: Math.round(Math.random() * 8 + 2) + "Mintes Ago",
            comments: []
        }
        store.dispatch({type: "posts/addPost", payload: currentPost})
        store.dispatch({type: "users/addPost", payload: currentPost})
        console.log(currentPost);
    }else {
        return next(action)
    }
} 

export const addPost = (payload) => {
    return {
        type: "addPost",
        payload: payload
    }
}