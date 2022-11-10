import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { reactionsAdded } from "./postSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const dispatch = useDispatch();

  return (
    <>
      <h2 className=' font-bold text-2xl text-blue-800'>Posts</h2>
      {orderedPosts.map((post) => (
        <article
          className=' border border-blue-800 p-2 rounded-lg '
          key={post.id}>
          <h3 className=' font-bold text-lg'>{post.title}</h3>
          <p className=' text-slate-800 text-lg'>{post.content}</p>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />

          <ReactionButtons post={post} />
        </article>
      ))}
    </>
  );
};

export default PostList;
