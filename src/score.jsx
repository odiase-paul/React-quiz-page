const ScoreApp = (props) => {
  const finalScore = props.finalScore;
  return (
    <div className="end-result">
      <h2>Completed!🎇</h2>
      <br />
      <p className="score">Your final score is {finalScore}</p>
    </div>
  );
};

export default ScoreApp;
