import { create } from "zustand";

const questions = [
  {
    id: 1,
    qImage:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    questionText: "What’s the smallest bone in the body?",
    options: ["Patella", "Stirrup", "Thigh", "Teeny Peeny"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    qImage:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/907/original/bone.jpeg?1698237706",
    questionText: "what is this fruit called?",
    options: ["Seedbox", "Sugar Apple", "Papijaja", "Lotusicous"],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    qImage: "/Greta-Thunberg.jpeg",
    questionText: "Who is this person?",
    options: [
      "Solvik Hammar",
      "Petra Thumb",
      "Greta Thunberg",
      "Anita Wrinkle",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    qImage: "Poland",
    questionText: "What country is this?",
    options: ["Germany", "Spain", "Poland", "France"],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    qImage: "Beach",
    questionText: "What do these pictures remind you of?",
    options: ["Cinema", "Kitchen", "Mountains", "Beach"],
    correctAnswerIndex: 3,
  },
  {
    id: 6,
    qImage: "Twarog - cheese",
    questionText: "What type of cheese do you see in the photo? ",
    options: ["Feta", "Twarog", "Camembert", "Paneer"],
    correctAnswerIndex: 1,
  },
  {
    id: 7,
    qImage: "Lipstick",
    questionText: "Where is the lipstick in the picture?",
    options: [
      "Center",
      "Top left corner,",
      "Bottom right corner",
      "Left center",
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 8,
    qImage: "Git",
    questionText: "What logo do you see in the picture?",
    options: ["VSC", "Git", "GitHub", "React"],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    qImage: "Car",
    questionText: "What car brand's logo do you see in the picture?",
    options: ["Volvo", "KIA", "Nissan", "Saab"],
    correctAnswerIndex: 1,
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
