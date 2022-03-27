import "./singlepost.css";
import { useLocation } from "react-router";
import { useEffect } from "react";

const SinglePost = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  useEffect(() => {}, []);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          dolor adipisicing elit. Delectus, dicta.
          <div className="singlePostEdit">
            <i className=" singlePostIcn far fa-edit"></i>
            <i className=" singlePostIcn far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singglePostInfo">
          <span className="singlePostAuthor">
            Auth : <b>Amol</b>
          </span>
          <span className="singlePostDate">
            Date : <b>1 hr ago</b>
          </span>{" "}
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          expedita quam eligendi esse quas illum sit non cupiditate, quae omnis
          quibusdam sequi. Consequuntur iusto, adipisci sunt eos excepturi error
          dolor sapiente perspiciatis fugit fugiat minima illum accusamus saepe
          maxime deserunt beatae deleniti autem ut odit mollitia voluptates!
          Ratione fuga placeat suscipit nihil fugiat eius doloremque. Eos
          inventore quidem ipsam vitae sed aliquam esse, culpa placeat totam ut
          ullam temporibus in distinctio commodi sapiente excepturi error dolor
          sapiente perspiciatis fugit fugiat minima illum accusamus saepe maxime
          deserunt beatae deleniti autem ut odit mollitia voluptates! Ratione
          fuga placeat suscipit nihil fugiat eius doloremque. Eos inventore
          quidem ipsam vitae sed aliquam esse, culpa placeat totam ut ullam
          temporibus in distinctio commodi sapiente cupiditate quia aspernatur,
          ea ipsa atque! Vitae dolorum neque odio, aliquid quasi nam soluta
          architecto ducimus alias culpa voluptatum. Magni distinctio sapiente
          facilis quam ab accusantium.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
