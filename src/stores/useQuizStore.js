import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: "What is my name?",
    options: ["Sara", "Sivan", "Sally", "Greven"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText: "Who set the Olympic record for the 100m dash in 2012?",
    options: ["Usain Bolt", "Justin Gatlin", "Tyson Gay", "Asafa Powell"],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    questionText: "When was Michael Phelps last named male World Swimmer of the Year?",
    options: ["2012", "2014", "2016", "2018"],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    questionText: "Where is my dog?",
    options: ["Here", "There", "Nowhere", "Everywhere"],
    correctAnswerIndex: 0,
  },
];

const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  selectedAnswerIndex: -1,

  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);
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
      selectedAnswerIndex: answerIndex,
    }));
    
    setTimeout(() => {
      set((state) => {
        if (state.currentQuestionIndex + 1 < state.questions.length) {
          return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1, selectedAnswerIndex: -1 };
        } else {
          return { ...state, quizOver: true };
        }
      });
    }, 1000); // Move to the next question after 1 second
  },

  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
      selectedAnswerIndex: -1,
    });
  },
}));

export default useQuizStore;