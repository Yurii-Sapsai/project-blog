import React from 'react'
import './AddPost.sass'

function AddPost() {
  return (
    <div className='addPost'>
        <label >Category</label>
        <select name="category" id="">
            <option value="Cities">Cities</option>
            <option value="History">History</option>
            <option value="Culture">Culture</option>
            <option value="News">News</option>
        </select>

        <label >Title</label>
        <input type="text" />

        <label >Text</label>
        <textarea name="post" id="" cols="30" rows="10"></textarea>

    </div>
  )
}

export default AddPost