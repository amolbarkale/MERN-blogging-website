import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="hederTitleSm">React and node</span>
        <span className="hederTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
