import React, { useContext, useCallback } from 'react';
import { UserContext, PostContext } from '../App';

export default function Post({ image, content, user, id }) {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);

  const isCurrentUser = user === currentUser;

  const handleDeletePost = useCallback(
    (id) => {
      dispatch({ type: 'DELETE_POST', payload: { id } });
    },
    [dispatch]
  );

  return (
    <li>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt='post'
          style={{ height: 100, width: 100, objectFit: 'cover' }}
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'paleturquoise' }}>{user}</div>
      {isCurrentUser && (
        <button onClick={() => handleDeletePost(id)}>Remove</button>
      )}
    </li>
  );
}
