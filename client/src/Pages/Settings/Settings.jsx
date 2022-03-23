import "./settings.css";
import Sidebar from "../../Coponents/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsDP">
            <img
              src="https://www.unigreet.com/wp-content/uploads/2022/01/today-best-whatsapp-dp-2022-1008x1024.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="text" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="amol" />
          <label>Email</label>
          <input type="email" placeholder="@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Add</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
