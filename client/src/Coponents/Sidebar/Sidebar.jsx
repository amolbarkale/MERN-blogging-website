import "./sidebar.css";
const Sidebar = () => {
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
          <li className="sidearListItm">Life</li>
          <li className="sidearListItm">Music</li>
          <li className="sidearListItm">Sport</li>
          <li className="sidearListItm">Cinema</li>
          <li className="sidearListItm">Tech</li>
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
