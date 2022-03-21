import "./topbar.css";

const Topbar = () => {
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
          <li className="topListItem">Home</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="img"
        />
        <i className="topSearchIcn fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
