import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: "What greeting phrase will a beginner in coding most probably use when creating their first website?",
    options: ["Hello world", "Bienvenue!", "Tja", "Good evening world wide web"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText: "What does HTML stand for?",
    options: ["Hypotext Markup Language", "Hypertext Markup Language", "Hot Tomatoes Mild Lettuce", "Hypertext Madeup Language"],
    correctAnswerIndex: 1,
  },
  {
  id: 3,
  questionText: "What is the purpose of a responsive website?",
  options: [
    "To ensure the website looks the same on all devices",
    "To increase website loading speed on mobile devices",
    "To make a website look good on all devices and screen sizes",
    "To enhance the security of websites on mobile devices"
  ],
  correctAnswerIndex: 2,
  },
  {
  id: 4,
  questionText: "What is a bug?",
  options: [
    "A feature in a program that works as intended",
    "An error in a program that causes it to produce unexpected results",
    "A type of insect that lives in the code",
    "A small creature that lives in the computer"
    ],
    correctAnswerIndex: 1,
  },
  {
  id: 5,
  questionText: "What is NOT considered Clean Code?",
  options: [
    "Code that is well-commented and easy to understand",
    "Functions that perform a single task",
    "Code with complex and nested conditional logic",
    "Variables with meaningful names"
  ],
  correctAnswerIndex: 2,
  },
  {
  id: 6,
  questionText: "What is the output of the following code: <h1>5 + 5<h1>?",
  options: [
    "55",
    "10",
    "5,5",
    "Nothing since the ending tag is incorrect."
  ],
  correctAnswerIndex: 2,
  },
  {
  id: 7,
  questionText: "What is the purpose of the `git clone` command?",
  options: [
    "To merge changes from one branch to another",
    "To create a new branch",
    "To copy a remote repository to your local machine",
    "To stage changes for commit"
  ],
  correctAnswerIndex: 2,
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
    }, 1000);
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