import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

import {
  selectAllPosts,
  getPostsStatus,
  getPostsErrors,
  fetchPosts,
} from "./postSlice";

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

  let content;
  if (postsStatus === "loading") {
    content = <div className='loader'>Loading...</div>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <>
      <h2 className=' font-bold text-2xl text-blue-800'>Posts</h2>
      {content}
    </>
  );
};

export default PostList;
