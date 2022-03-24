import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="emter your mail here..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="emter your password here..."
        />
        <button className="loginBtn">Login</button>{" "}
      </form>
      <button className="RegBtn">
        <Link className="link" to="/reg">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
