import React, { useState, useRef, useContext } from 'react';
import shortid from 'shortid';
import { PostContext, UserContext } from '../App';

export default function CreatePost() {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const currentUser = useContext(UserContext);

  const handleChangeContent = ({ target: { value } }) => {
    setContent(value);
  };

  const handleChangeImage = ({ target: { files } }) => {
    setImage(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleAddPost(content, image);
    const post = { content, image, user: currentUser, id: shortid.generate() };
    dispatch({ type: 'ADD_POST', payload: { post } });
    clearInput();
  };

  const clearInput = () => {
    setContent('');
    imageInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={content}
          placeholder='Add Post Content'
          onChange={handleChangeContent}
        />
        <input type='file' onChange={handleChangeImage} ref={imageInputRef} />
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  );
}
