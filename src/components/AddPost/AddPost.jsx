import React, { useState } from 'react'
import './AddPost.sass'

import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

function AddPost() {

  const [category, setCategory] = useState('Cities')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const uuid = uuidv4()

  const handleCategory = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value);
  }
  const handleTitle = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value);
  }
  const handleText = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
  }
  
  function createPost(uuid, category, title, text) {

    const db = getDatabase();
    const reference = ref(db, 'posts/' + uuid)

    set(reference, {
      category: category,
      title: title,
      text: text
    });
  }

  return (
    <div className='addPost'>
      <label >Category</label>
      <select 
        name="category"
        value={category}
        onChange={(e) => handleCategory(e)} >
        <option value="Cities">Cities</option>
        <option value="History">History</option>
        <option value="Culture">Culture</option>
        <option value="News">News</option>
      </select>

      <label >Title</label>
      <input
        type="text"
        name='title'
        value={title}
        onChange={(e) => handleTitle(e)} />

      <label >Text</label>
      <textarea
        name="text"
        cols="30"
        rows="10"
        type="text"
        value={text}
        onChange={(e) => handleText(e)}
      >
      </textarea>

      <button onClick={() => createPost( uuid, category, title, text)} >CREATE</button>

    </div>
  )
}

export default AddPost