import { Fragment } from "react";
import QuestionComponent from "./questions";
import Button from "./button";

const TopComponent = (props) => {
  const questionNumber = props.questionNumber;
  const currentQuestion = props.currentQuestion;
  const handleChange = props.handleChange;
  const uuid = props.uuid;
  return (
    <Fragment>
      <div className="entire-element">
        <div className="question-div">
          <QuestionComponent
            questionNumber={questionNumber}
            currentQuestion={currentQuestion}
          />
          <br />
        </div>
        <div className="buttons">
          <Button
            handleChange={handleChange}
            currentQuestion={currentQuestion}
            uuid={uuid}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TopComponent;
