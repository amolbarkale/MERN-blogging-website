import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum d adipisicing elit. Quaerat
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
    </div>
  );
};

export default Post;
