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
      <div className="final-score-result">
        <div style={{ marginTop: "30px" }} className="end-result">
          <h2>Completed!🎇</h2>
          <br />
          <br />
          <p className="score">Your final score is {finalScore}</p>
        </div>
        <br />
        <br />
        <div>
          <button onClick={handleRestartHere}>Retake Quiz</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ScoreApp;
