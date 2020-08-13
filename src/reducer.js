const postReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_POST': {
      return {
        posts: [payload.post, ...state.posts],
      };
    }
    case 'DELETE_POST': {
      return { posts: state.posts.filter((post) => post.id !== payload.id) };
    }
    default:
      return state;
  }
};

export default postReducer;
