import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostsInstance = () =>
  instance({
    method: "GET",
    url: "/posts",
  });

export const getPostByIdInstance = (id) =>
  instance({
    method: "GET",
    url: `/posts/${id}`,
  });
