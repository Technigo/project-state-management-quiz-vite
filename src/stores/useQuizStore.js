import { create } from "zustand";

const questions = [
  {
    id: 1,
    questionText: "When is the surströmming premiere in 2024?",
    options: ["Monday, July 1", "Saturday, August 10", "Sunday, September 1", "Friday, August 30", "Wednesday, August 14", "Thursday, August 15th"],
    correctAnswerIndex: 5,
  },
  {
    id: 2,
    questionText:
      "A significant holiday in Sweden is Midsummer. Midsummer night was associated with various supernatural beliefs. What was considered health-promoting?",
    options: ["Drinking hot tea with honey", "Wearing a crown of thorns", "Climbing a tree at midnight", "Rolling naked in the dew on Midsummer's Day", "Singing loudly at dawn", "Kissing a frog in the moonlight"],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    questionText:
      "Astrid Lindgren is one of Sweden's most famous authors of all time. However, during World War II, she had a top-secret task, what was it?",
    options: ["She worked on opening mail and censoring information that was deemed potentially revealing about the Swedish defense.", "Coordinating espionage missions", "Serving as a battlefield nurse", "Running a secret underground radio station", "Inventing code words for the military", "Designing camouflage patterns for soldiers"],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    questionText:
      "When is the first time meatballs are mentioned in Swedish history?",
    options: ["In a royal decree from 1605", "Meatballs are first mentioned in print in Sweden in Kajsa Warg's cookbook from 1754", "In a travel diary from the 18th century", "In a Shakespearean play set in Sweden", "In a religious manuscript from the 13th century", "In a historical novel from the 19th century"],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionText:
      "How many cars does the king own??",
    options: ["5 cars", "20 cars", "2 cars", "10 cars", "15 cars", "7 cars"],
    correctAnswerIndex: 3,
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


