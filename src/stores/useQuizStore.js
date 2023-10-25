import { create } from "zustand";

//// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"

//should we delete the 'options' in the questions array as all of our questions have the SAME possible answers, so we dont need to check each question specifically.

const questions = [
  {
    id: 1,
    questionText:
      "Uluru, The Great Barrier Reef, and Mount Kosciuszko, are found in which country?",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 4,
  },
  {
    id: 2,
    questionText: "put new Question 3 here!",
    options: ["Estonia", "Finland", "Indonesia", "Australia"],
    correctAnswerIndex: 2,
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
];

//set up store, arrow function with an object
const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,

  // This function takes a question id and an answer index, validates them, and then updates the answers array with the user's answer.
  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    // Throws an error if there is no question found
    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    // Throws an error if the answerIndex isn't in the array of possible answers
    if (question.options[answerIndex] === undefined) {
      throw new Error(
        `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
      );
    }

    // State is updated for the answers array. The set-function takes a callback-function as an argument, which receives the current state as a parameter.
    set((state) => ({
      answers: [
        ...state.answers,
        //Here comes the new answers object
        {
          questionId, // the questions id
          answerIndex, // the index of the selected answer
          question, // the question object
          answer: question.options[answerIndex], // the text of the selected answer, comes from the options using the answerIndex
          isCorrect: question.correctAnswerIndex === answerIndex, // A boolean indicating whether the selected answer is correct. Determined by comparing the answerIndex with the correctAnswerIndex in the question object.
        },
      ],
    }));
  },

  // This function increments the currentQuestionIndex to move to the next question. If there are no more questions, it sets quizOver to true.
  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  // This function resets the answers array, currentQuestionIndex, and quizOver to their initial states.
  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },
}));

// The useQuizStore is exported for use in other parts of the application.
export default useQuizStore;
