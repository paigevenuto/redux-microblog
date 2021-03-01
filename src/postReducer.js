const INITIAL_STATE = {};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_POST": {
      const post = action.post;
      return post;
    }
    case "ADD_POST": {
      const post = action.post;
      return post;
    }
    case "DELETE_POST": {
      return {};
    }
    case "EDIT_POST": {
      const post = action.post;
      return post;
    }
    case "VOTE": {
      const post = action.post;
      return post;
    }
    default:
      return state;
  }
}
