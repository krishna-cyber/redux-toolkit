import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAllPosts, getPostsStatus, getPostsErrors } from "./postsSlice";

const POSTS_URL = "https://jsonplaceholder.typicode.com/POSTS";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsErrors);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

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
          <PostAuthor userID={post.user} />
          <TimeAgo timestamp={post.date} />

          <ReactionButtons post={post} />
        </article>
      ))}
    </>
  );
};

export default PostList;
