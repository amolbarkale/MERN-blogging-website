import "./settings.css";
import Sidebar from "../../Coponents/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../Contexts/context";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      username,
      email,
      password,
      userId: user._id,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log("err:", err);
      }
    }
    try {
      console.log("user:", user);

      let ress = await axios.put(
        "http://localhost:5000/user/update/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: ress.data });

      console.log("ress:", ress);
    } catch (err) {
      console.log("err:", err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form onSubmit={handleSubmit} className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsDP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user-circle"></i>
            </label>

            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
            <input type="text" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="settingsSubmit">
            Add
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", margin: "20px" }}
            >
              Profile has been updated successfully
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
