const INITIAL_STATE = [];

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_ALL_POSTS": {
      const posts = action.posts;
      return posts;
    }
    default:
      return state;
  }
}
