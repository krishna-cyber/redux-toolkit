import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", // idle, loading, succeeded, failed
  errors: null,
};
const BASE_URL = "";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        //Adding date and reactions
        let min = 1;
        const loadPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString;
          post.reactions = {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          };
          return post;
        });
        state.posts = state.posts.concat(loadPosts);
      })
      .addcase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const selectAllPosts = (state) => state.posts.posts;
const getPostsStatus = (state) => state.posts.status;
const getPostsErrors = (state) => state.posts.errors;

export const { postAdded, reactionsAdded } = postSlice.actions;

export default postSlice.reducer;
