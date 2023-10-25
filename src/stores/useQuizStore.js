import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: "Who set the Olympic record for the 100m dash in 2012?",
    options: ["Usain Bolt", "Justin Gatlin", "Tyson Gay", "Asafa Powell"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText:
      "When was Michael Phelps last named male World Swimmer of the Year?",
    options: ["2012", "2014", "2016", "2018"],
    correctAnswerIndex: 2,
  },
];

//set up store, arrow function with an object
const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,

  //handle the submit answer from user
  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    //check if the user clicked "submit answer"
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

  //display new question
  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  //restart quiz
  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },
}));

export default useQuizStore;
