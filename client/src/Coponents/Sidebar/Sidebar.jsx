import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cat, setCat] = useState([]);
  console.log("cat:", cat);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/categories/");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItm">
        <span className="sidebarTitle">About me</span>
        <img
          src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, mollitia
          minima. Sunt quibusdam laborum unde. Veritatis, quisquam expedita?
          Nesciunt, magnam.
        </p>
      </div>
      <div className="sidebarItm">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cat.map((itm, idx) => (
            <Link className="link" to={`/?cat=${itm.name}`}>
              <li key={idx} className="sidearListItm">
                {itm.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItm">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sisebarIcn fab fa-facebook"></i>
          <i className="sisebarIcn fab fa-twitter-square"></i>
          <i className="sisebarIcn fab fa-pinterest-square"></i>
          <i className="sisebarIcn fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
