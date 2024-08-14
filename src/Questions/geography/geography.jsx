import EntireDiv from "../../quiz-page/quiz-page";

const GeographyQuestions = ({ handleFinalScore }) => {
  const geographyQuestions = [
    {
      id: 1,
      question: "Which planet in the Milky Way is the hottest?",
      options: ["(A) Earth", "(B) Venus", "(C) Pluto", "(D) Mars"],
      answer: "(B) Venus",
    },
    {
      id: 2,
      question: "What planet is closest to the sun?",
      options: ["(A) Earth", "(B) Venus", "(C) Mercury", "(D) Mars"],
      answer: "(C) Mercury",
    },
    {
      id: 3,
      question: "Which planet has the most moons?",
      options: ["(A) Saturn", "(B) Venus", "(C) Pluto", "(D) Mars"],
      answer: "(A) Saturn",
    },
    {
      id: 4,
      question: "What country has the most islands? ",
      options: ["(A) Sweden", "(B) India", "(C) Ukrain", "(D) Ireland"],
      answer: "(A) Sweden",
    },
    {
      id: 5,
      question: "What is the only continent with land in all four hemispheres?",
      options: ["(A) Africa", "(B) Europe", "(C) America", "(D) Asia"],
      answer: "(A) Africa",
    },
    {
      id: 6,
      question: "Which river flows through the Grand Canyon?",
      options: [
        "(A) Congo River",
        "(B) Colorado River",
        "(C) Chari River",
        "(D) Nile River",
      ],
      answer: "(B) Colorado River",
    },
    {
      id: 7,
      question: "Where is Angel Falls, the world’s largest waterfall located?",
      options: ["(A) Sweden", "(B) Ireland", "(C) Venezuela", "(D) England"],
      answer: "(C) Venezuela",
    },
    {
      id: 8,
      question: "What is the state capital of New York?",
      options: ["(A) Denver", "(B) Phoenix", "(C) Atlanta", "(D) Albany"],
      answer: "(D) Albany",
    },
    {
      id: 9,
      question: "What is the capital of Ireland?",
      options: ["(A) Juneau", "(B) Hartford", "(C) Boise", "(D) Dublin"],
      answer: "(D) Dublin",
    },
    {
      id: 10,
      question: "What is the smallest US state by area?",
      options: ["(A) Ohio", "(B) Rhode Island", "(C) Texas", "(D) Alaska"],
      answer: "(B) Rhode Island",
    },
    {
      id: 11,
      question: "What is the tallest type of tree?",
      options: ["(A) Oak", "(B) Hawthorn", "(C) Redwoods", "(D) Black Locust"],
      answer: "(C) Redwoods",
    },
    {
      id: 12,
      question: "Holland is a region in The Netherlands?",
      options: ["(A) True", "(B) False"],
      answer: "(A) True",
    },
    {
      id: 13,
      question: "How many European capitals does the Danube flow through?",
      options: ["(A) 4", "(B) 1", "(C) 3", "(D) 5"],
      answer: "(A) 4",
    },
    {
      id: 14,
      question: "What is the capital of Canada?",
      options: ["(A) Phoenix", "(B) Ottawa", "(C) Atlanta", "(D) Denver"],
      answer: "(B) Ottawa",
    },
    {
      id: 15,
      question: "In what capital would you find The Little Mermaid statue?",
      options: ["(A) Hartford", "(B) Dublin", "(C) Copenhagen", "(D) Juneau"],
      answer: "(C) Copenhagen",
    },
    {
      id: 16,
      question: "In what continent would you find the city of Baku?",
      options: ["(A) America", "(B) Italy", "(C) Russia", "(D) Asia"],
      answer: "(D) Asia",
    },
    {
      id: 17,
      question: "How many stars are on the Chinese flag?",
      options: ["(A) 5", "(B) 4", "(C) 3", "(D) 6"],
      answer: "(A) 5",
    },
    {
      id: 18,
      question: "How many colors are used in the South African flag?",
      options: ["(A) 5", "(B) 4", "(C) 3", "(D) 6"],
      answer: "(D) 6",
    },
  ];
  return (
    <EntireDiv
      handleFinalScore={handleFinalScore}
      questions={geographyQuestions}
    />
  );
};

export default GeographyQuestions;
