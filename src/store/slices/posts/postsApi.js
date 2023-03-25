import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async function () {
        const {data: postsData} = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100");
        const {data: commentsData} = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const data = postsData.map(post => ({
            id: post.id.toString(),
            img: post.url,
            name: post.title.split(' ')[0],
            likesCount: Math.round(Math.random() * 300 + 500),
            postText: post.title.split(" ").splice(1).join(" "),
            timeAgo: Math.round(Math.random() * 8 + 2) + "Mintes Ago",
            comments: [
                ...commentsData.filter(comment => comment.postId === post.id).map(el => ({
                    id: el.id.toString(),
                    username: el.name.split(' ')[0],
                    body: el.body
                }))
            ]
        }))
        return data
    }
)