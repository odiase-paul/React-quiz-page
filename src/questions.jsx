const QuestionComponent = (props) => {
  const questionNumber = props.questionNumber;
  const currentQuestion = props.currentQuestion;
  return (
    <div>
      <h1>
        Get The Answer To That <span>FAQ</span>
      </h1>

      <p className="question-number">{`Question ${questionNumber}`}</p>
      <p className="question">{currentQuestion && currentQuestion.question}</p>
    </div>
  );
};

export default QuestionComponent;
