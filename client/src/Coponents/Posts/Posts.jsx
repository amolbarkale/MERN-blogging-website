import "./posts.css";
import Post from "../Post/Post";
const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((itm) => (
        <Post post={itm} />
      ))}
    </div>
  );
};

export default Posts;
