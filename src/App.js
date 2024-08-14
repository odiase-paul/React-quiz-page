import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./mediaQuery.css";

import ScoreApp from "./score/score";
import { useState } from "react";
import LandingPage from "./landing-page/landing-page";
import Entertainment from "./Questions/entertainment/entertainment";
import Sports from "./Questions/sports/sports";
import GeneralQuestions from "./Questions/general/general";
import GeographyQuestions from "./Questions/geography/geography";
import Footer from "./footer/footer";

const App = () => {
  const [finalScore, setFinalScore] = useState(0);
  const handleFinalScore = () => {
    return setFinalScore(finalScore + 1);
  };
  const handleRestart = () => {
    setFinalScore(0);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route index element={<LandingPage />} />
          <Route
            path="entertainment"
            element={<Entertainment handleFinalScore={handleFinalScore} />}
          />
          <Route
            path="general"
            element={<GeneralQuestions handleFinalScore={handleFinalScore} />}
          />
          <Route
            path="sports"
            element={<Sports handleFinalScore={handleFinalScore} />}
          />
          <Route
            path="geography"
            element={<GeographyQuestions handleFinalScore={handleFinalScore} />}
          />

          <Route
            path="score"
            element={
              <ScoreApp finalScore={finalScore} handleRestart={handleRestart} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
