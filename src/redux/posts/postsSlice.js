import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  postId: null,
  error: "",
};

export default createSlice({
  name: "posts",
  initialState,
  reducers: {
    setErrorNull: (state) => ({ ...state, error: "" }),

    getPostsSuccess: (state, { payload }) => ({
      ...state,
      posts: payload,
    }),

    getPostsError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    getPostsByIdSuccess: (state, { payload }) => ({
      ...state,
      post: payload,
    }),

    getPostsByIdError: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),

    getPostId: (state, { payload }) => ({
      ...state,
      postId: payload,
    }),
  },
});
