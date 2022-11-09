import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <PostAuthor userId={post.userId} />
        </article>
      ))}
    </>
  );
};

export default PostList;
