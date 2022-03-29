import "./reg.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("http://localhost:5000/auth/reg", {
        username,
        email,
        password,
      });
      console.log("res:", res);

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="emter your password here..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="emter your mail here..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="emter your password here..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerBtn">Register</button>{" "}
      </form>
      <button className="RegBtn" type="submit">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{ color: "red" }}> something went wrong</span>}{" "}
    </div>
  );
};

export default Register;
