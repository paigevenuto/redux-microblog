import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import { getPosts } from "./actionCreators";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((store) => store.posts);

  return (
    <div className="container mt-3">
      <div className="row row-cols-2">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
