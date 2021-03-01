const INITIAL_STATE = [];

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_ALL_COMMENTS": {
      const comments = action.comments;
      return comments;
    }
    case "REMOVE_COMMENT": {
      const comments = action.comments;
      return comments;
    }
    case "ADD_COMMENT": {
      const comments = action.comments;
      return comments;
    }
    default:
      return state;
  }
}
