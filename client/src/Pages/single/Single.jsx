import "./single.css";
import Sidebar from "../../Coponents/Sidebar/Sidebar";
import SinglePost from "../../Coponents/SinglePost/SinglePost";
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
