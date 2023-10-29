import { create } from "zustand";

//// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"

const useQuizStore = create((set) => ({
  currentQuestionIndex: 0,
  answers: [],
  quizOver: false,
  selectedAnswers: [], // Store user-selected answers
  questions: [
    {
      id: 1,
      questionText:
        "Uluru, The Great Barrier Reef, and Mount Kosciuszko, are found in which country?",
      options: ["Estonia", "Finland", "Indonesia", "Australia"],
      correctAnswerIndex: 3, //correct answer for Q1 is Australia
    },
    {
      id: 2,
      questionText:
        "Which country is known for its love of technology and once declared internet access a basic human right, ensuring that even a squirrel in the forest can livestream its hoarding activities?",
      options: ["Estonia", "Finland", "Indonesia", "Australia"],
      correctAnswerIndex: 0, //correct answer for Q2 is Estonia
    },
    {
      id: 3,
      questionText: "Nasi Goreng is a popular dish is which country?",
      options: ["Estonia", "Finland", "Indonesia", "Australia"],
      correctAnswerIndex: 2, //correct answer for Q3 is Indonesia
    },
    {
      id: 4,
      questionText: "One of the most emotionally engaging and significant cultural traditions is the celebration of 'Juhannus,' or Midsummer. Which country is known for this tradition, and how does it hold a special place in the hearts of its people?",
      options: ["Estonia", "Finland", "Indonesia", "Australia"],
      correctAnswerIndex: 1, //correct answer for Q4 is Finland
    },
    {
      id: 5,
      questionText: "Komodo Dragons can only be found in which country?",
      options: ["Estonia", "Finland", "Indonesia", "Australia"],
      correctAnswerIndex: 2, //correct answer for Q5 is Indonesia
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

  //restart quiz - r-eadded from starter code by Beckie for the restart quiz button
  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },

  getCorrectedAnswer: (answer) =>
    set((state) => {
      const updatedSelectedAnswers = [...state.selectedAnswers, answer];
      return { selectedAnswers: updatedSelectedAnswers };
    }),
}));

// The useQuizStore is exported for use in other parts of the application.
export default useQuizStore;
