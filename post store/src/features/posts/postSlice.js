import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    thumbsup: (state, action) => {
      const { id } = action.payload;

      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions.thumbsUp++;
      }
    },
    hooray: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions.hooray++;
      }
    },

    heart: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions.heart++;
      }
    },

    rocket: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions.rocket++;
      }
    },

    eyes: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.reactions.eyes++;
      }
    },

    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const { postAdded, hooray, heart, rocket, eyes, thumbsup } =
  postSlice.actions;

export default postSlice.reducer;
