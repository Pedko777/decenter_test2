import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./posts/postsSlice";
import loaderSlice from "./loader/loaderSlice";

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    posts: postsSlice.reducer,
  },
  middleware: [thunk],
});
