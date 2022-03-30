import { useState } from "react";
import "./write.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../Contexts/context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log("err:", err);
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/posts/", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcn fas fa-plus"></i>
          </label>

          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          />

          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="writeInput writeText"
            placeholder="Tell your story.."
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
