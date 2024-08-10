import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/home";
import ScoreApp from "./score";
import { useState } from "react";

const App = () => {
  const [finalScore, setFinalScore] = useState(0);
  const handleFinalScore = () => {
    setFinalScore(finalScore + 1);
  };
  const handleRestart = () => {
    setFinalScore(0);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home handleFinalScore={handleFinalScore} />}
        />
        <Route
          path="/score"
          element={
            <ScoreApp finalScore={finalScore} handleRestart={handleRestart} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
