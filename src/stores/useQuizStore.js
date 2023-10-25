import { create } from "zustand";

//// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"

const useQuizStore = create((set) => ({
  currentQuestionIndex: 0,
  answers: [],
  quizOver: false,
questions : [
  {
    id: 1,
    questionText:
      "Uluru, The Great Barrier Reef, and Mount Kosciuszko, are found in which country?",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 3,
  },
  {
    id: 2,
    questionText: "Which country is known for its love of technology and once declared internet access a basic human right, ensuring that even a squirrel in the forest can livestream its hoarding activities?",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    questionText: "put new Question 3 here!",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    questionText: "put new Question 4 here!",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    questionText: "put new Question 5 here!",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 2,
  },
],



  // This function takes a question id and an answer index, validates them, and then updates the answers array with the user's answer.
  submitAnswer: (answer) =>
  set((state) => ({
    answers: [...state.answers, answer],
  })),


goToNextQuestion: () =>
  set((state) => {
    if (state.currentQuestionIndex + 1 === state.questions.length) {
      return { quizOver: true };
    } else {
      return { currentQuestionIndex: state.currentQuestionIndex + 1 };
    }
  }),
}));

// The useQuizStore is exported for use in other parts of the application.
export default useQuizStore;