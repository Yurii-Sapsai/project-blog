import React, { useEffect, useState } from 'react'
import './Posts.sass'

import PostCard from './PostCard/PostCard';

import { getDatabase, ref, child, get } from "firebase/database";

function Posts() {

    const [posts, setPosts] = useState({})

    const dbRef = ref(getDatabase());

    useEffect(()=>{

        get(child(dbRef, `posts/`))
            .then((snapshot) => {
            if (snapshot.exists()) {
                setPosts(snapshot.val())
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
            
    },[])

    let newArr = []
    for(let key in posts){
       newArr.push(posts[key])
    }
    console.log(newArr)
  return (
    <div className='posts' >
        {newArr.map((post, index)=>(
            <PostCard post={post} key={index}/>
        ))}
    </div>
  )
}

export default Posts