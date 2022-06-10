import React, { useState } from 'react'
import './AddPost.sass'

import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

import { categories } from '../Categories/Categories';

function AddPost() {
  const [category, setCategory] = useState('Cities')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const uuid = uuidv4()
  const date = new Date()

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleText = (e) => {
    setText(e.target.value);
  }

  const createPost = (uuid, category, title, text, date) => {

    const db = getDatabase();
    const reference = ref(db, 'posts/' + uuid)

    set(reference, {
      category,
      title,
      text, 
      date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    });
  }

  return (
    <div className='addPost'>
      <label >Category</label>
      <select
        name="category"
        value={category}
        onChange={(e) => handleCategory(e)} >
        {categories.map((category, index)=>(
          <option value={category} key={index}>{category}</option>
        ))}  
        
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

      <button onClick={() => createPost(uuid, category, title, text, date)} >CREATE</button>

    </div>
  )
}

export default AddPost