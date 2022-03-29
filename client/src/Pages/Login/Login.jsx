import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../Contexts/context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch, isFetching, user } = useContext(Context);

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: userRef,
        password: passRef,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log("err:", err);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log("user:", user);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={hanldeSubmit} className="loginForm">
        <label>Username</label>
        <input
          ref={userRef}
          className="loginInput"
          type="text"
          placeholder="emter your username here..."
        />
        <label>Password</label>
        <input
          ref={passRef}
          className="loginInput"
          type="password"
          placeholder="enter your password here..."
        />
        <button className="loginBtn">Login</button>{" "}
      </form>
      <button type="submit" className="RegBtn">
        <Link className="link" to="/reg">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
