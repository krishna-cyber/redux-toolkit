import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", // idle, loading, succeeded, failed
  erorr: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
            date: new Date().toISOString(),
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { id, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionsAdded } = postSlice.actions;

export default postSlice.reducer;
