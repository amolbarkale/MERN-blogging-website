import "./singlepost.css";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/context";

const SinglePost = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const user = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/posts/" + pathname);
      console.log("res:", res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [pathname]);
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/posts/update/${post._id}`, {
        username: user.user.username,
        title,
        desc,
      });
      //  window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/delete/${post._id}`, {
        data: { username: user.user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log("err:", err);
    }
  };
  console.log(" user?.username :", user.user.username);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            autoFocus
            className="singlePostTitleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user.user.username && (
              <div className="singlePostEdit">
                <i
                  onClick={() => setUpdateMode(true)}
                  className=" singlePostIcn far fa-edit"
                ></i>
                <i
                  onClick={handleDelete}
                  className=" singlePostIcn far fa-trash-alt"
                ></i>
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className="singlePostDescInput"
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button onClick={handleUpdate} className="singlePostUpdateBtn">
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
