import React, {useState, useEffect} from 'react'
import './PostCard.sass'

import { getStorage, ref, getDownloadURL} from "firebase/storage";



function PostCard({ post }) {

    const {title, text, uuid, date} = post
    const [url, setUrl] = useState('')

    const storage = getStorage();
    useEffect(()=>{
        getDownloadURL(ref(storage, `gs://blog-app-7d4ac.appspot.com/${uuid}`))
        .then((url) => setUrl(url))
    },[title])

    return (
        <div className='postCard'>

            <h1><mark>{title}</mark></h1>
            <img src={url} alt="img" />
            <p>{text}</p>
            <span>{date}</span>

        </div>
    )
}

export default PostCard 