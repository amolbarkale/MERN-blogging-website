import "./home.css";
import Header from "../../Coponents/header/Header";
import Posts from "../../Coponents/Posts/Posts";
import Sidebar from "../../Coponents/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/posts");
      setPost(res.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={post} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
