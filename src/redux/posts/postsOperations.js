import postsSlice from "./postsSlice";
import loaderSlice from "../loader/loaderSlice";
import { getPostsInstance, getPostByIdInstance } from "../../api/api";

export const getPosts = () => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  getPostsInstance()
    .then((data) => {
      dispatch(postsSlice.actions.getPostsSuccess(data.data));
      dispatch(postsSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(postsSlice.actions.getPostsError(error)));
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getPostsById = (id) => (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  getPostByIdInstance(id)
    .then((data) => {
      dispatch(postsSlice.actions.getPostsByIdSuccess(data.data));
      dispatch(postsSlice.actions.setErrorNull());
    })
    .catch((error) => dispatch(postsSlice.actions.getPostsByIdError(error)));
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const addPostId = (id) => (dispatch) => {
  dispatch(postsSlice.actions.getPostId(id));
};
