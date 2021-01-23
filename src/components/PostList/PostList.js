import PostItem from "../PostItem/PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="posts__list">
      {posts &&
        posts.map((post) => <PostItem postListItem={post} key={post.id} />)}
    </ul>
  );
};

export default PostList;
