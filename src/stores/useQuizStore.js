import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: 'What is the primary ingredient in the traditional Japanese dish "Okonomiyaki"?',
    options: ["Soba noodles", "Tempura", "Cabbage", "Tofu"],
    correctAnswerIndex: 2,
    imgURL: '/assets/images/question-1-img.webp',
    numberURL: '/assets/numbers/number1.svg', 
  },
  {
    id: 2,
    questionText:
      'In which region of France is the classic dish "Bouillabaisse" believed to have originated?',
    options: ["Paris", "Provence", "Normandy", "Alsace"],
    correctAnswerIndex: 1,
    imgURL: '/assets/images/question-2-img.jpeg',
    numberURL: '/assets/numbers/number2.svg',
  },
  {
    id: 3,
    questionText:
      'What is the main protein used in the traditional Turkish dish "Iskender Kebab"?',
    options: ["Chicken", "Lamb", "Beef", "Tofu"],
    correctAnswerIndex: 2,
    imgURL: '/assets/images/question-3-img.jpeg',
    numberURL: '/assets/numbers/number3.svg',
  },
  {
    id: 4,
    questionText:
      'Which spice, often referred to as "black gold," is a key component in Moroccan cuisine, particularly in dishes like tagine?',
    options: ["Saffron", "Cinnamon", "Nutmeg", "Paprika"],
    correctAnswerIndex: 1,
    imgURL: '/assets/images/question-4-img.webp',
    numberURL: '/assets/numbers/number4.svg',
  },
  {
    id: 5,
    questionText:
      'Which country is famous for its "Peking Duck," a dish known for its crispy skin and tender meat?',
    options: ["Thailand", "China", "Vietnam", "Malaysia"],
    correctAnswerIndex: 1,
    imgURL: '/assets/images/question-5-img.webp',
    numberURL: '/assets/numbers/number5.svg',
  },
  {
    id: 6,
    questionText:
      'What is the key ingredient in the Thai dish "Som Tum"?',
    options: ["Pad Thai noodles", "Coconut milk", "Green papaya", "Tamarind paste"],
    correctAnswerIndex: 2,
    imgURL: '/assets/images/question-6-img.webp',
    numberURL: '/assets/numbers/number6.svg',
  },
  {
    id: 7,
    questionText:
      'Which type of pasta is shaped like small rice grains and is often used in Italian soups?',
    options: ["Penne", "Campanelle", "Radiatore", "Orzo"],
    correctAnswerIndex: 3,
    imgURL: '/assets/images/question-7-img.webp',
    numberURL: '/assets/numbers/number7.svg',
  },
];

const useQuizStore = create((set) => ({
  questions,
  answers: [],
  currentQuestionIndex: null,
  quizOver: false,
  setQuizOver: () => {
    set({ quizOver: true });
  },

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
      if(state.currentQuestionIndex == null){
        return { currentQuestionIndex: 0};
      }
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
      currentQuestionIndex: null,
      quizOver: false,
    });
  },

  
}));

export default useQuizStore;
