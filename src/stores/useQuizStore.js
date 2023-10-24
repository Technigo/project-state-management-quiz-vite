import { create } from "zustand";

const initialQuestions = [
    {
        text: "When is the surströmming premiere in 2024?",
        options: [
            "Monday, July 1",
            "Saturday, August 10",
            "Sunday, September 1",
            "Friday, August 30",
            "Wednesday, August 14",
            "Thursday, August 15th",
        ],
        correctAnswerIndex: 5,
        givenAnswerIndex: null,
    },
    {
        text: "A significant holiday in Sweden is Midsummer. Midsummer night was associated with various supernatural beliefs. What was considered health-promoting?",
        options: [
            "Drinking hot tea with honey",
            "Wearing a crown of thorns",
            "Climbing a tree at midnight",
            "Rolling naked in the dew on Midsummer's Day",
            "Singing loudly at dawn",
            "Kissing a frog in the moonlight",
        ],
        correctAnswerIndex: 3,
        givenAnswerIndex: null,
    },
    {
        text: "Astrid Lindgren is one of Sweden's most famous authors of all time. However, during World War II, she had a top-secret task, what was it?",
        options: [
            "She worked on opening mail and censoring information that was deemed potentially revealing about the Swedish defense.",
            "Coordinating espionage missions",
            "Serving as a battlefield nurse",
            "Running a secret underground radio station",
            "Inventing code words for the military",
            "Designing camouflage patterns for soldiers",
        ],
        correctAnswerIndex: 0,
        givenAnswerIndex: null,
    },
    {
        text: "When is the first time meatballs are mentioned in Swedish history?",
        options: [
            "In a royal decree from 1605",
            "Meatballs are first mentioned in print in Sweden in Kajsa Warg's cookbook from 1754",
            "In a travel diary from the 18th century",
            "In a Shakespearean play set in Sweden",
            "In a religious manuscript from the 13th century",
            "In a historical novel from the 19th century",
        ],
        correctAnswerIndex: 1,
        givenAnswerIndex: null,
    },
    {
        text: "How many cars does the king own?",
        options: [
            "5 cars",
            "20 cars",
            "2 cars",
            "10 cars",
            "15 cars",
            "7 cars",
        ],
        correctAnswerIndex: 3,
        givenAnswerIndex: null,
    },
];

const useQuizStore = create((set) => ({
    questions: initialQuestions,
    currentQuestionIndex: 0,
    hasCompleted: false,

    answerCurrentQuestion: (answerIndex) => {
        set((state) => {
            const copyOfQuestions = [...state.questions];
            copyOfQuestions[state.currentQuestionIndex].givenAnswerIndex = answerIndex;

            return {
                ...state,
                questions: copyOfQuestions,
            };
        });
    },

    goToNextQuestion: () => {
        set((state) => {
            if (state.questions[state.currentQuestionIndex].givenAnswerIndex !== null) {
                const hasCompleted = state.currentQuestionIndex === state.questions.length - 1;
                return {
                    ...state,
                    hasCompleted,
                    currentQuestionIndex: hasCompleted
                        ? state.currentQuestionIndex
                        : state.currentQuestionIndex + 1,
                };
            }

            return state;
        });
    },

    restart: () => {
        set((state) => ({
            // For some reason it does not work to just set this
            // to initialQuestions, the givenAnswerIndex retains its
            // old value. Therefore we use map instead to do a hard
            // reset of each questions givenAnswerIndex
            questions: state.questions.map((question) => ({
                ...question,
                givenAnswerIndex: null,
            })),
            currentQuestionIndex: 0,
            hasCompleted: false,
        }));
    },
}));

export default useQuizStore;
