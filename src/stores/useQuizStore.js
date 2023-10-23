import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: "What lake is this?",
    options: ["xx", "xx", "xx", "xx"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText:
      "The Mariana Trench, the deepest part of the world's oceans, is located in which ocean?",
    options: ["Atlantic ocean", "Pacific ocean", "Southern ocean", "Indian Ocean"],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    questionText:
      "What percentage of Earth's surface is covered by oceans?",
    options: ["Approximately 50%", "Approximately 61%", "Approximately 71%", "Approximately 85%"],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    questionText:
      "What type of shark is pictured above?",
    options: ["xx", "xx", "xx", "xx"],
    correctAnswerIndex: 3,
  },
  {
    id: 5,
    questionText:
      "Who is the actor who plays Aquaman?",
    options: ["Liam Hemsworth", "Jason Segel", "Chris Evans", "Jason Momoa"],
    correctAnswerIndex: 4,
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
}));

export default useQuizStore;
