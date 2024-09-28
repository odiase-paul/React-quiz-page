import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import uuid from "react-uuid";
import Button from "./button";
import "./quizPage.css";

const EntireDiv = ({ questions, handleFinalScore }) => {
  const [randomArray, setRandomArray] = useState([]);
  const [randomQuestionNumber, setRandomQuestionNumber] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  let [changeClass, setChangeClass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const randomQuestionArray = questions.sort(() =>
      Math.floor(Math.random() - 0.5)
    );
    setRandomArray(randomQuestionArray);
  }, []);
  const currentQuestion = randomArray[randomQuestionNumber];

  const handleChange = (btn) => {
    if (questionNumber < questions.length) {
      setTimeout(() => {
        setQuestionNumber((previousValue) => previousValue + 1);
        setRandomQuestionNumber(randomQuestionNumber + 1);
      }, 1000);
    } else {
      navigate("/score");
    }

    if (currentQuestion.answer === btn) {
      handleFinalScore();

      setChangeClass((changeClass = "Correct"));
    } else {
      setChangeClass((changeClass = "Wrong"));
    }
    setTimeout(() => {
      setChangeClass((changeClass = ""));
    }, 1000);
  };

  return (
    <div className="container">
      <h1>
        Get The Answer To That <span>FAQ</span>
      </h1>
      <div className="question-div">
        <p className="question-number">{`Question ${questionNumber}`}</p>
        <p className="question">
          {currentQuestion && currentQuestion.question}
        </p>
      </div>
      <div className="buttons">
        <Button
          handleChange={handleChange}
          currentQuestion={currentQuestion}
          // uuid={uuid}
        />
      </div>
      <div className="display-answer">
        <p className={`${changeClass} select-color`}>{changeClass}</p>
      </div>
    </div>
  );
};

export default EntireDiv;
