import axios from "axios";
const BASE_URL = "http://localhost:5000";

function getPosts() {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/api/posts`);
    const posts = res.data.sort(
      (a, b) => parseFloat(b.votes) - parseFloat(a.votes)
    );
    const action = { type: "GET_ALL_POSTS", posts };
    dispatch(action);
  };
}

function getPost(postId) {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    const action = { type: "GET_POST", post: res.data };
    dispatch(action);
  };
}

function editPost(postId, post) {
  return async function (dispatch) {
    const res = await axios.put(`${BASE_URL}/api/posts/${postId}`, post);
    const action = { type: "EDIT_POST", post: res.data };
    dispatch(action);
  };
}

function addPost(post) {
  return async function (dispatch) {
    const res = await axios.post(`${BASE_URL}/api/posts`, post);
    const action = { type: "ADD_POST", post: res.data };
    dispatch(action);
  };
}

function deletePost(postId) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${postId}`);
    const action = { type: "DELETE_POST" };
    dispatch(action);
  };
}

function getComments(postId) {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}/comments`);
    const action = { type: "GET_ALL_COMMENTS", comments: res.data };
    dispatch(action);
  };
}

function removeComment(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    const action = { type: "REMOVE_COMMENT", comments: res.data };
    dispatch(action);
  };
}

function addComment(postId, comment) {
  return async function (dispatch) {
    await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, comment);
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}/comments`);
    const action = { type: "REMOVE_COMMENT", comments: res.data };
    dispatch(action);
  };
}

function placeVote(postId, direction) {
  return async function (dispatch) {
    await axios.post(`${BASE_URL}/api/posts/${postId}/vote/${direction}`);
    const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);
    const action = { type: "VOTE", post: res.data };
    dispatch(action);
  };
}

export {
  getPost,
  getPosts,
  getComments,
  removeComment,
  addComment,
  editPost,
  deletePost,
  addPost,
  placeVote,
};
