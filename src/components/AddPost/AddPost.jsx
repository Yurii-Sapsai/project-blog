import React, { useEffect, useState } from 'react';
import './AddPost.sass';

import { getDatabase, ref, set } from "firebase/database";
import { getStorage, ref as reff, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { categories } from '../Categories/Categories';

function AddPost() {
  const [category, setCategory] = useState('CITIES');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const [formValid, setFormValid] = useState(false);

  const uuid = uuidv4();
  const date = new Date();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    if (category && title && text && file) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [category, title, text, file]);

  const createPost = (uuid, category, title, text, date) => {

    const db = getDatabase();
    const reference = ref(db, 'posts/' + uuid);

    const storage = getStorage();
    const storageRef = reff(storage, uuid);

    uploadBytes(storageRef, file).then((file) => {
    });

    set(reference, {
      uuid,
      category,
      title,
      text,
      date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    });
  }


  return (
    <div className='addPost'>
      <div className="category">
        <label >Category</label>
        <select
          name="category"
          value={category}
          onChange={(e) => handleCategory(e)} >
          {categories.map((category, index) => (
            <option value={category} key={index}>{category}</option>
          ))}
        </select>
      </div>

      <label >Title</label>
      <input
        type="text"
        name='title'
        className='inputTitle'
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

      <input type="file" className='inputFile' onChange={(e) => handleFile(e)} />

      <a href="/project-blog" style={{margin:'0 auto'}}><button onClick={() => createPost(uuid, category, title, text, date)} disabled={!formValid}>Add post</button></a>

    </div>
  )
}

export default AddPost;