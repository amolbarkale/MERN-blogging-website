import "./home.css";
import Header from "../../Coponents/header/Header";
import Posts from "../../Coponents/Posts/Posts";
import Sidebar from "../../Coponents/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
