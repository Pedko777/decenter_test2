import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/posts/postsOperations";
import "../../styles/main.scss";
import Layout from "../Layout";
import PostList from "../PostList/PostList";
import { getPostsSelector } from "../../redux/posts/postsSelectors";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector(getPostsSelector);

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <PostList posts={posts} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default App;
