import { Fragment } from "react";
import { Link } from "react-router-dom";

const Background = ({ image, title, route }) => {
  return (
    <Fragment>
      <Link to={`/${route}`} className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="category-body-container">
            <h2>{title}</h2>
          </div>
          <button className="startQuiz">Start Quiz</button>
        </div>
      </Link>
    </Fragment>
  );
};

export default Background;
