import { create } from "zustand";
import geographyImage from "../assets/geography.svg";
import historyImage from "../assets/history.svg";
import literatureImage from "../assets/literature.svg";
import scienceImage from "../assets/science.svg";
import sportsImage from "../assets/sports.svg";

const questions = [
  {
    id: 1,
    questionText: "Science: What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    correctAnswerIndex: 3,
    image: scienceImage,
  },
  {
    id: 2,
    questionText: "History: Who was the first president of the United States?",
    options: [
      "Benjamin Franklin",
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
    ],
    correctAnswerIndex: 2,
    image: historyImage,
  },
  {
    id: 3,
    questionText: "Geography: Which river is the longest in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correctAnswerIndex: 1,
    image: geographyImage,
  },
  {
    id: 4,
    questionText: "Literature: Who wrote the play Romeo and Juliet?",
    options: [
      "William Wordsworth",
      "Charles Dickens",
      "William Shakespeare",
      "John Keats",
    ],
    correctAnswerIndex: 2,
    image: literatureImage,
  },
  {
    id: 5,
    questionText: "Sports: Which country hosted the 2016 Summer Olympics?",
    options: ["Brazil", "China", "Australia", "United Kingdom"],
    correctAnswerIndex: 0,
    image: sportsImage,
  },
];

const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,

  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    if (question.options[answerIndex] === undefined) {
      throw new Error(
        `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
      );
    }

    set((state) => ({
      answers: [
        ...state.answers,
        {
          questionId,
          answerIndex,
          question,
          answer: question.options[answerIndex],
          isCorrect: question.correctAnswerIndex === answerIndex,
        },
      ],
    }));
  },

  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },

  numberOfCorrectAnswers: (state) => {
    return state.answers
      ? state.answers.filter((answer) => answer.isCorrect).length
      : 0;
  },
}));

export default useQuizStore;
