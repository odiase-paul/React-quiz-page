import EntireDiv from "../../quiz-page/quiz-page";

const GeneralQuestions = ({ handleFinalScore }) => {
  const generalQuestions = [
    {
      id: 1,
      question: "What city is known as 'The Eternal City'?",
      options: ["(A) Rome", "(B) London", "(C) New york", "(D) Manchester"],
      answer: "(A) Rome",
    },
    {
      id: 2,
      question: "In what country is the Chernobyl nuclear plant located?",
      options: ["(A) Ukraine", "(B) USA", "(C) Denmark", "(D) Russia"],
      answer: "(A) Ukraine",
    },

    {
      id: 3,
      question: "Compared to their body weight, what animal is the strongest?",
      options: ["(A) Elephant", "(B) Ant", "(C) Dung Beetle", "(D) Cow"],
      answer: "(C) Dung Beetle",
    },

    {
      id: 4,
      question: "How many dots appear on a pair of dice?",
      options: ["(A) 21", "(B) 42", "(C) 6", "(D) 1"],
      answer: "(B) 42",
    },

    {
      id: 5,
      question: "Which is the only body part that is fully grown from birth?",
      options: ["(A) Ear", "(B) Torso", "(C) Eyeball", "(D) Mouth"],
      answer: "(C) Eyeball",
    },
    {
      id: 6,
      question: "Acrophobia is the fear of?",
      options: ["(A) Space", "(B) Humans", "(C) Height", "(D) Water"],
      answer: "(C) Height",
    },
    {
      id: 7,
      question: "In what country was Elon Musk born?",
      options: ["(A) Algeria", "(B) England", "(C) France", "(D) South Africa"],
      answer: "(D) South Africa",
    },
    {
      id: 8,
      question: "Who performs the voice of Homer Simpson? ",
      options: [
        "(A) Chris Evans",
        "(B) Dan Castellaneta",
        "(C) Michael Oliver",
        "(D)Cavil Scott",
      ],
      answer: "(B) Dan Castellaneta",
    },

    {
      id: 9,
      question: "What is a group of crows called?",
      options: ["(A) Group", "(B) Herds", "(C) Flock", "(D) Murder"],
      answer: "(D) Murder",
    },
    {
      id: 10,
      question: "How many hearts does an octopus have?",
      options: ["(A) 3", "(B) 2", "(C) 4", "(D) 1"],
      answer: "(A) 3",
    },
    {
      id: 11,
      question: "December 26th is known by what names in Ireland? ",
      options: [
        "(A) Saint Stephen's Day",
        "(B) Saint James's Day",
        "(C) Saint Joseph's Day",
        "(D) Saint Albert's Day",
      ],
      answer: "(A) Saint Stephen's Day",
    },
    {
      id: 12,
      question: "In what US state is the country's busiest airport located?",
      options: ["(A) Texas", "(B) California", "(C) Alaska", "(D) Georgia"],
      answer: "(D) Georgia",
    },
    {
      id: 13,
      question: "Where is the strongest human muscle located?",
      options: ["(A) Spine", "(B) Leg", "(C) Brain", "(D) Jaw"],
      answer: "(D) Jaw",
    },
    {
      id: 14,
      question: "What phone company produced the 3310?",
      options: ["(A) Apple", "(B) Nokia", "(C) Itel", "(D) Gionee"],
      answer: "(B) Nokia",
    },
  ];
  return (
    <EntireDiv
      handleFinalScore={handleFinalScore}
      questions={generalQuestions}
    />
  );
};

export default GeneralQuestions;
