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

    options: [
      { text: "Mars", isCorrect: false },
      { text: "Venus", isCorrect: false },
      { text: "Earth", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
    ],
    image: scienceImage,
  },
  {
    id: 2,
    questionText: "History: Who was the first president of the United States?",
    options: [
      { text: "Benjamin Franklin", isCorrect: false },
      { text: "Thomas Jefferson", isCorrect: false },
      { text: "George Washington", isCorrect: true },
      { text: "Abraham Lincoln", isCorrect: false },
    ],
    image: historyImage,
  },
  {
    id: 3,
    questionText: "Geography: Which river is the longest in the world?",
    options: [
      { text: "Amazon River", isCorrect: false },
      { text: "Nile River", isCorrect: true },
      { text: "Yangtze River", isCorrect: false },
      { text: "Mississippi River", isCorrect: false },
    ],
    image: geographyImage,
  },
  {
    id: 4,
    questionText: "Literature: Who wrote the play Romeo and Juliet?",
    options: [
      { text: "William Wordsworth", isCorrect: false },
      { text: "Charles Dickens", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "John Keats", isCorrect: false },
    ],
    image: literatureImage,
  },
  {
    id: 5,
    questionText: "Sports: Which country hosted the 2016 Summer Olympics?",
    options: [
      { text: "Brazil", isCorrect: true },
      { text: "China", isCorrect: false },
      { text: "Australia", isCorrect: false },
      { text: "United Kingdom", isCorrect: false },
    ],
    image: sportsImage,
  },
];

const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  userAnswer: null, // Added this new state variable
  showMessage: false,

  submitAnswer: (questionId, selectedOption) => {
    const question = questions.find((q) => q.id === questionId);

    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    // Convert selectedOption to Number for consistency
    const answerIndex = Number(selectedOption);

    // logs for debugging
    console.log("Correct Answer Index:", question.options);
    console.log("Selected Answer Index:", answerIndex);

    if (!question.options[answerIndex]) {
      throw new Error(
        `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
      );
    }

    const isCorrect = question.options[answerIndex].isCorrect;

    set((state) => ({
      answers: [
        ...state.answers,
        {
          questionId,
          selectedOption,
          question,
          answer: question.options[answerIndex],
          isCorrect: isCorrect,
        },
      ],
      userAnswer: question.options[selectedOption],
      showMessage: true,
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
    set((state) => ({
      ...state,
      userAnswer: null,
      showMessage: false,
    }));
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
