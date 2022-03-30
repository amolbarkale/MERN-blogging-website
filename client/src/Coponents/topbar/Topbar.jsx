import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/context";
import { useContext } from "react";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLgout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcn fab fa-facebook"></i>
        <i className="topIcn fab fa-twitter-square"></i>
        <i className="topIcn fab fa-pinterest-square"></i>
        <i className="topIcn fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLgout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="img" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/reg">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcn fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
