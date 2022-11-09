import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

import { hooray, heart, rocket, eyes, thumbsup } from "./postSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className=' font-bold text-2xl text-blue-800'>Posts</h2>
      {posts.map((post) => (
        <article
          className=' border border-blue-800 p-2 rounded-lg '
          key={post.id}>
          <h3 className=' font-bold text-lg'>{post.title}</h3>
          <p className=' text-slate-800 text-lg'>{post.content}</p>
          <PostAuthor userId={post.userId} />

          <div className=' flex gap-3'>
            <button
              className=' bg-blue-800 text-white rounded-lg p-2'
              onClick={() => dispatch(thumbsup(post.id))}>
              👍{post.reactions.thumbsUp}
            </button>
            <button
              className=' bg-blue-800 text-white rounded-lg p-2'
              onClick={() => dispatch(hooray(post.id))}>
              😅{post.reactions.hooray}
            </button>
            <button
              className=' bg-blue-800 text-white rounded-lg p-2'
              onClick={() => dispatch(heart(post.id))}>
              ❤️{post.reactions.heart}
            </button>
            <button
              className=' bg-blue-800 text-white rounded-lg p-2'
              onClick={() => dispatch(rocket(post.id))}>
              🚀{post.reactions.rocket}
            </button>
            <button
              onClick={() => dispatch(eyes(post.id))}
              className=' bg-blue-800 text-white rounded-lg p-2'>
              👁️{post.reactions.eyes}
            </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default PostList;
