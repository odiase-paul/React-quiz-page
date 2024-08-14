import sports from "../img/sport.jpg";
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
      title: "General Quiz",
      route: "general",
    },
    {
      id: 2,
      imageCategory: sports,
      title: "Sport Quiz",
      route: "sports",
    },
    {
      id: 3,
      imageCategory: entertainment,
      title: "Entertainment Quiz",
      route: "entertainment",
    },
    {
      id: 4,
      imageCategory: geography,
      title: "Geography Quiz",
      route: "geography",
    },
  ];

  return (
    <Fragment>
      <div className="landingPage">
        <div className="landing-page-color">
          <h1>
            Welcome to <span>PAKH'S</span> Quiz
          </h1>
          <h2>
            Click on any of the category to <span>Start Quiz</span>
          </h2>
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
