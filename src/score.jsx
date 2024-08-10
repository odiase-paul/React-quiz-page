import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ScoreApp = ({ finalScore, handleRestart }) => {
  const navigate = useNavigate();
  const handleRestartHere = () => {
    navigate("/");
    handleRestart();
  };
  return (
    <Fragment>
      <div className="end-result">
        <h2>Completed!🎇</h2>
        <br />
        <p className="score">Your final score is {finalScore}</p>
      </div>
      <br />
      <br />
      <div>
        <button onClick={handleRestartHere}>Retake Quiz</button>
      </div>
    </Fragment>
  );
};

export default ScoreApp;
