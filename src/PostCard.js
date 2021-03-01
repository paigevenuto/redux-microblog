import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { placeVote, getPosts } from "./actionCreators";

function PostCard({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card m-3">
        <div className="card-body">
          <NavLink export to={`/${post.id}`}>
            <h5 className="card-title card-link">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {post.description}
            </h6>
          </NavLink>
          <div
            className="btn btn-success mx-2"
            onClick={() => {
              dispatch(placeVote(post.id, "up"));
              dispatch(getPosts());
            }}
          >
            &#9650;
          </div>
          <span>Votes: {post.votes}</span>
          <div
            className="btn btn-danger mx-2"
            onClick={() => {
              dispatch(placeVote(post.id, "down"));
              dispatch(getPosts());
            }}
          >
            &#9660;
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
