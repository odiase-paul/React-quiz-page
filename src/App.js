import uuid from "react-uuid";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "./button";
import ScoreApp from "./score";
function App() {
  const allQuestions = [
    {
      id: 1,
      question: "Which planet in the Milky Way is the hottest?",
      options: ["(A) Earth", "(B) Venus", "(C) Pluto", "(D) Mars"],
      answer: "(B) Venus",
    },
    {
      id: 2,
      question: "What city is known as 'The Eternal City'?",
      options: ["(A) Rome", "(B) London", "(C) New york", "(D) Manchester"],
      answer: "(A) Rome",
    },
    {
      id: 3,
      question: "Which planet has the most moons?",
      options: ["(A) Saturn", "(B) Venus", "(C) Pluto", "(D) Mars"],
      answer: "(A) Saturn",
    },
    {
      id: 4,
      question: "What country has won the most World Cups?",
      options: ["(A) Brazil", "(B) Italy", "(C) Argentina", "(D) Spain"],
      answer: "(A) Brazil",
    },
    {
      id: 5,
      question: "In what country is the Chernobyl nuclear plant located?",
      options: ["(A) Ukraine", "(B) USA", "(C) Denmark", "(D) Russia"],
      answer: "(A) Ukraine",
    },
  ];

  const [randomQuestionNumber, setRandomQuestionNumber] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [finalResult, setFinalResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  useEffect(() => {
    const randomQuestionArray = allQuestions.sort(() =>
      Math.floor(Math.random() - 0.5)
    );
    setRandomArray(randomQuestionArray);
  }, []);

  const currentQuestion = randomArray[randomQuestionNumber];

  const handleChange = (btn) => {
    if (questionNumber < allQuestions.length) {
      setQuestionNumber((previousValue) => previousValue + 1);
      setRandomQuestionNumber(randomQuestionNumber + 1);
    } else {
      setFinalResult(true);
    }
    if (currentQuestion.answer === btn) {
      setFinalScore(finalScore + 1);
    } else {
    }
  };

  return (
    <div className="App container">
      {!finalResult ? (
        <div className="entire-element">
          <h1>
            Get The Answer To That <span>FAQ</span>
          </h1>

          <p className="question-number">{`Question ${questionNumber}`}</p>
          <p className="question">
            {currentQuestion && currentQuestion.question}
          </p>
          <br />

          <div className="buttons">
            <Button
              handleChange={handleChange}
              currentQuestion={currentQuestion}
              uuid={uuid}
            />
          </div>
        </div>
      ) : (
        <ScoreApp finalScore={finalScore} />
      )}
    </div>
  );
}

export default App;
