import "./reg.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="emter your password here..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="emter your mail here..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="emter your password here..."
        />
        <button className="registerBtn">Register</button>{" "}
      </form>
      <button className="RegBtn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
