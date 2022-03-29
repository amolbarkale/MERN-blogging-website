import "./singlepost.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/posts/" + pathname);
      setPost(res.data);
    };
    getPost();
  }, [pathname]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}{" "}
          <div className="singlePostEdit">
            <i className=" singlePostIcn far fa-edit"></i>
            <i className=" singlePostIcn far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singglePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            Date : <b>{new Date(post.createdAt).toDateString()}</b>
          </span>{" "}
        </div>

        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
