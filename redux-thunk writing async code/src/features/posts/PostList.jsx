import React from "react";
import { useSelector, useDispatch, createAsyncThunk } from "react-redux";
import axios from "axios";
const POSTS_URL = "https://jsonplaceholder.typicode.com/POSTS";

import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const PostList = () => {
  const posts = useSelector(selectAllPosts);
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
