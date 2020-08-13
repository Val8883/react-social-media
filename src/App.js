import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from 'react';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './reducer';

import styles from './App.module.css';

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

export default function App() {
  const initialPostState = useContext(PostContext);

  const [state, dispatch] = useReducer(postReducer, initialPostState);

  const [user, setUser] = useState('V');

  useEffect(
    function() {
      document.title = user ? `${user}'s feed` : 'Please login';
    },
    [user]
  );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className={styles.app}>
      <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
          <Header user={user} setUser={setUser} />
          <CreatePost />
          <PostList posts={state.posts} />
        </UserContext.Provider>
      </PostContext.Provider>
    </div>
  );
}
