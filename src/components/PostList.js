import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </ul>
  );
}
