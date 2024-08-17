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

    {
      id: 15,
      question: "What is the chemical symbol for Gold?",
      options: ["(A) Gd", "(B) Go", "(C) Au", "(D) Ag"],
      answer: "(C) Au",
    },
    {
      id: 16,
      question: "In what year was the first iPhone released?",
      options: ["(A) 2005", "(B) 2007", "(C) 2008", "(D) 2003"],
      answer: "(B) 2007",
    },
    {
      id: 17,
      question: 'Who painted the "Mona Lisa"?',
      options: [
        "(A) Leonardo da Vinci",
        "(B) Michelangelo",
        "(C) Raphael",
        "(D) Caravaggio",
      ],
      answer: "(A) Leonardo da Vinci",
    },
    {
      id: 18,
      question: "Who discovered electricity?",
      options: [
        "(A) Isaac Newton",
        "(B) Nikola Tesla",
        "(C) Michael Faraday",
        "(D) Benjamin Franklin",
      ],
      answer: "(D) Benjamin Franklin",
    },

    {
      id: 19,
      question: "Who came up with the theory of relativity?",
      options: [
        "(A) Edgar Allan",
        "(B) Albert Einstein",
        "(C) Galileo Galilei",
        "(D) Louis Pasteur",
      ],
      answer: "(B) Albert Einstein",
    },
    {
      id: 20,
      question: "What language is spoken in Brazil?",
      options: ["(A) Spanish", "(B) English", "(C) Portuguese", "(D) French"],
      answer: "(C) Portuguese",
    },

    {
      id: 21,
      question: " Who invented the lightbulb?",
      options: [
        "(A) Albert Einstein",
        "(B) Nikola Tesla",
        "(C) Graham Bell",
        "(D) Thomas Edison",
      ],
      answer: "(D) Thomas Edison",
    },

    {
      id: 22,
      question: "Who is the CEO of Tesla?",
      options: [
        "(A) Jeff Bezos",
        "(B) Mark Zuckerberg",
        "(C) Tim Cook",
        "(D) Elon Musk",
      ],
      answer: "(D) Elon Musk",
    },

    {
      id: 23,
      question: "What is the fastest land animal?",
      options: ["(A) Cheetah", "(B) Ostrich", "(C) Lion", "(D) Tiger"],
      answer: "(A) Cheetah",
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
