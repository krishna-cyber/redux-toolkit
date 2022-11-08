import React from "react";
import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </>
  );
};

export default PostList;
