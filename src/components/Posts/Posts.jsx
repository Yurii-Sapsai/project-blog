import React, { useEffect, useState } from 'react'
import './Posts.sass'

import PostCard from './PostCard/PostCard';

import { getDatabase, ref, child, get } from "firebase/database";

import { useSelector } from 'react-redux'

function Posts() {

    const [posts, setPosts] = useState([])
    const { category } = useSelector(state => state.category)

    const dbRef = ref(getDatabase());

    useEffect(() => {

        get(child(dbRef, `posts/`))
            .then((item) => {
                if (item.exists()) {

                    let newArr = []
                    for (let key in item.val()) {
                        newArr.push(item.val()[key])
                    }

                    if (category) {
                        newArr = newArr.filter((item) => item.category.includes(category))
                    }

                    setPosts(newArr)
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [category])


    return (
        <div className='posts' >
            {posts.map((post, index) => (

                <PostCard post={post} key={index} />

            ))}
        </div>
    )
}

export default Posts


