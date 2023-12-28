import { create } from "zustand";
import { questions } from "../components/QuestionsArray";

const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,

  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    // if (!question) {
    //   throw new Error(
    //     "This question could not be found unfortunately"
    //   );
    // }

    // if (question.options[answerIndex] === undefined) {
    //   throw new Error(
    //     `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
    //   );
    // }

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

  start: () => {
    set({
      startQuiz: true,
    });
  },
}));

export default useQuizStore;
