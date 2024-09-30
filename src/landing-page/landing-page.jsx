import sports from "../img/sport_2.jpg";
import general from "../img/general.jpg";
import entertainment from "../img/entertainment.jpg";
import geography from "../img/geography.jpg";
import "./landing.css";
import Background from "../background/background";
import { Fragment } from "react";

const LandingPage = () => {
  const categories = [
    {
      id: 1,
      imageCategory: general,
      title: "General",
      route: "general",
    },
    {
      id: 2,
      imageCategory: sports,
      title: "Sport",
      route: "sports",
    },
    {
      id: 3,
      imageCategory: entertainment,
      title: "Entertainment",
      route: "entertainment",
    },
    {
      id: 4,
      imageCategory: geography,
      title: "Geography",
      route: "geography",
    },
  ];

  return (
    <Fragment>
      <div className="landingPage">
        <div className="landing-page-color">
          <div className="welcome-note">
            <h1>
              Welcome to <span>PAKH'S</span> Quiz
            </h1>
          </div>
          <div className="landingPage-start-quiz">
            <h2>
              Click on any of the category to <br />
              <span>Start Quiz</span>
            </h2>
          </div>
        </div>
        <div className="display-container">
          {categories.map((item) => (
            <Background
              image={item.imageCategory}
              title={item.title}
              route={item.route}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
