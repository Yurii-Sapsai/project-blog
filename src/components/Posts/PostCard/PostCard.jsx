import React from 'react'
import './PostCard.sass'

function PostCard({post}) {

    const {title, text, date} = post
    
    return (
        <div className='postCard'>

            <h1><mark>{title}</mark></h1>
            <p>{text}</p>
            <span>{date}</span> 

        </div>
    )
}

export default PostCard