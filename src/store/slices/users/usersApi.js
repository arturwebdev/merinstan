import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async function () {
        const { data: usersData } = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10");
        const { data: photosData } = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=500")
        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            avatar: "https://avatars.mds.yandex.net/i?id=1ac47b4ab24c8fdb748d719ff9f51a867c1c5c6a-8376176-images-thumbs&n=13",
            email: user.email.toLowerCase(),
            password: "123",
            bio: user.company.cathPharse + user.company.bs,
            followers: Math.round(Math.random() * 400 + 500),
            following: Math.round(Math.random() * 400 + 500),
            posts: [
                ...photosData.map(post => ({
                    id: post.id.toString(),
                    img: post.url,
                    name: post.title.split(' ')[0],
                    likesCount: Math.round(Math.random() * 300 + 500),
                    postText: post.title.split(" ").splice(1).join(" "),
                    timeAgo: Math.round(Math.random() * 8 + 2) + "Mintes Ago",
                    comments: []
                }))
            ]
        }))
        return data;
    }
)