import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import useFields from "./useFields";
import {
  getPost,
  getPosts,
  deletePost,
  getComments,
  removeComment,
  addComment,
  placeVote,
} from "./actionCreators";
import PostForm from "./PostForm";

function Post() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, handleChange] = useFields({
    comment: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addComment(postId, { text: formData.comment }));
  };

  const handleDelete = () => {
    dispatch(deletePost(postId));
    dispatch(getPosts());
    history.push("/");
  };

  useEffect(() => {
    dispatch(getPost(postId));
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  const post = useSelector((store) => store.post);
  const comments = useSelector((store) => store.comments);

  const commentHtml = (comment) => {
    return (
      <div>
        <span
          onClick={() => dispatch(removeComment(postId, comment.id))}
          className="text-danger font-weight-bold mx-3"
          style={{ cursor: "pointer" }}
        >
          X
        </span>
        <span>{comment.text}</span>
      </div>
    );
  };

  const [togglePostForm, setTogglePostForm] = useState(false);

  return (
    <div className="container">
      {togglePostForm ? (
        <PostForm post={post} setTogglePostForm={setTogglePostForm} />
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <p>{post.body}</p>
          <div
            className="btn btn-outline-primary mx-1"
            onClick={() => setTogglePostForm(true)}
          >
            Edit
          </div>
          <div className="btn btn-outline-danger mx-1" onClick={handleDelete}>
            Delete
          </div>

          <div
            className="btn btn-success mx-2"
            onClick={() => {
              dispatch(placeVote(postId, "up"));
            }}
          >
            &#9650;
          </div>
          <span>Votes: {post.votes}</span>
          <div
            className="btn btn-danger mx-2"
            onClick={() => {
              dispatch(placeVote(postId, "down"));
            }}
          >
            &#9660;
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Comments</h2>
        <div>
          {comments[0] ? comments.map((comment) => commentHtml(comment)) : ""}
        </div>

        <form onSubmit={handleSubmit} className="m-4">
          <div className="form-group">
            <input
              value={formData.comment}
              onChange={handleChange}
              name="comment"
              className="form-control"
              id="comment"
              aria-describedby="comment"
              placeholder="New Comment"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
