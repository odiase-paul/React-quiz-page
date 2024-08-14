import EntireDiv from "../../quiz-page/quiz-page";

const Sports = ({ handleFinalScore }) => {
  const sportQuestion = [
    {
      id: 1,
      question: "What country has won the most World Cups?",
      options: ["(A) Brazil", "(B) Italy", "(C) Argentina", "(D) Spain"],
      answer: "(A) Brazil",
    },
    {
      id: 2,
      question: "In what city is the NFL Hall of Fame located?",
      options: ["(A) New York", "(B) Manchester", "(C) London", "(D) Ohio"],
      answer: "(D) Ohio",
    },
    {
      id: 3,
      question: "Simone Biles is famous for her skill in what sport?",
      options: [
        "(A) Gymnastics",
        "(B) Football",
        "(C) Basketball",
        "(D) Table Tennis",
      ],
      answer: "(A) Gymnastics",
    },
    {
      id: 4,
      question: "What was the first name of Argentinian soccer star Maradona?",
      options: ["(A) Lionel", "(B) Diego", "(C) Angel", "(D) Diogo"],
      answer: "(D) ",
    },
    {
      id: 5,
      question: "What height is a regulation NBA basket?  ",
      options: ["(A) 12", "(B) 9", "(C) 10 feet", "(D) 8"],
      answer: "(C) 10 feet",
    },
    {
      id: 6,
      question: "What is the national sport of Japan?",
      options: [
        "(A) Sumo Boxing",
        "(B) Danju Wrestling",
        "(C) Danju Boxing",
        "(D) Sumo Wrestling",
      ],
      answer: "(D) Sumo Wrestling",
    },
    {
      id: 7,
      question: "What sporting event has a strict dress code of all-white?",
      options: ["(A) Marathon", "(B) Wimbledon", "(C) Jupitar", "(D) Olympics"],
      answer: "(B) Wimbledon",
    },
  ];
  return (
    <EntireDiv handleFinalScore={handleFinalScore} questions={sportQuestion} />
  );
};

export default Sports;
