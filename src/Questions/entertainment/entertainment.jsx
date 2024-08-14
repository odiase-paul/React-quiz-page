import EntireDiv from "../../quiz-page/quiz-page";

const Entertainment = ({ handleFinalScore }) => {
  const entertainmentQuestions = [
    {
      id: 1,
      question:
        "What animated movie features a rat who dreams of becoming a chef in Paris?",
      options: [
        "(A) Gary The Rat",
        "(B) The Ratties",
        "(C) Ratz",
        "(D) Ratatouille",
      ],
      answer: "(D) Ratatouille",
    },
    {
      id: 2,
      question:
        " Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
      options: [
        "(A) Robert Downey Jr",
        "(B) Chris Evans",
        "(C) Chris Hemsworth",
        "(D) Mark Ruffalo",
      ],
      answer: "(A) Robert Downey Jr",
    },
    {
      id: 3,
      question:
        'What is the name of the fictional continent where "Game of Thrones" primarily takes place?',
      options: [
        "(A) Winterfell",
        "(B) Westeros",
        "(C) Kings Landing",
        "(D) Ballintoy",
      ],
      answer: "(B) Westeros",
    },
    {
      id: 4,
      question: " Who wrote the Harry Potter book series?",
      options: [
        "(A) E.L James",
        "(B) Stephen King",
        "(C) Ian Fleming",
        "(D) J.K. Rowling",
      ],
      answer: "(D) J.K. Rowling",
    },
    {
      id: 5,
      question: 'Which pop star is known as the "Queen of Pop"?',
      options: ["(A) Madonna", "(B) Oliver", "(C) Miliano", "(D) Celine"],
      answer: "(A) Madonna",
    },
    {
      id: 6,
      question:
        "What is the name of the fictional African country in Black Panther?",
      options: ["(A) Mbube", "(B) Wakanda", "(C) Iron Throne", "(D) Westeros"],
      answer: "(B) Wakanda",
    },
    {
      id: 7,
      question: "Which actor played Jack Dawson in Titanic?",
      options: [
        "(A) Victor Garber",
        "(B) Bill Paxton",
        "(C) Billy Zane",
        "(D) Leonardo DiCaprio",
      ],
      answer: "(D) Leonardo DiCaprio",
    },
    {
      id: 8,
      question:
        "What is the highest-grossing animated film of all time as at 2023? ",
      options: ["(A) Lion King", "(B) Moana", "(C) Frozen II", "(D) Sing"],
      answer: "(C) Frozen II",
    },
  ];

  return (
    <EntireDiv
      handleFinalScore={handleFinalScore}
      questions={entertainmentQuestions}
    />
  );
};

export default Entertainment;
