import "./posts.css";
import Post from "../Post/Post";
const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((itm, idx) => (
        <Post post={itm} key={idx}></Post>
      ))}
    </div>
  );
};

export default Posts;
