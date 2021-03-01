import React from "react";
import useFields from "./useFields";
import { useHistory } from "react-router-dom";
import { addPost, editPost } from "./actionCreators";
import { useDispatch, useSelector } from "react-redux";

function PostForm({
  post = { title: "", description: "", body: "" },
  setTogglePostForm,
}) {
  const dispatch = useDispatch();

  const history = useHistory();

  const [formData, handleChange] = useFields({
    title: post.title,
    description: post.description,
    body: post.body,
  });

  const newPost = useSelector((store) => store.post);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (setTogglePostForm) {
      dispatch(editPost(post.id, formData));
      setTogglePostForm(false);
    } else {
      dispatch(addPost(formData));
      history.push(`/${newPost.id}`);
    }
  };

  const handleCancel = () => {
    if (setTogglePostForm) {
      setTogglePostForm(false);
    } else {
      history.push("/");
    }
  };
  return (
    <div className="container p-5">
      <h1>{post.title === "" ? "New" : "Edit"} Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            value={formData.title}
            onChange={handleChange}
            name="title"
            className="form-control"
            id="title"
            aria-describedby="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <input
            value={formData.description}
            onChange={handleChange}
            name="description"
            className="form-control"
            id="description"
            aria-describedby="description"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label for="body">Body</label>
          <textarea
            value={formData.body}
            onChange={handleChange}
            name="body"
            className="form-control"
            id="body"
            aria-describedby="body"
            placeholder="Body"
          />
        </div>
        <button type="submit" className="btn btn-primary mx-1">
          Submit
        </button>
        <div className="btn btn-secondary mx-1" onClick={handleCancel}>
          Cancel
        </div>
      </form>
    </div>
  );
}

export default PostForm;
