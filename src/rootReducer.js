import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentReducer,
});

export default rootReducer;
