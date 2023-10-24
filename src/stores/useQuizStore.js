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

// Creating a Zustand store for managing quiz state
const useQuizStore = create((set) => ({
    // Initial state properties
    questions: initialQuestions, // Array of quiz questions
    currentQuestionIndex: 0, // Index of the current question
    hasCompleted: false, // Flag indicating if the quiz has been completed

    // Function to answer the current question
    answerCurrentQuestion: (answerIndex) => {
        set((state) => {
            // Creating a copy of the questions array to avoid mutating the original state
            const copyOfQuestions = [...state.questions];
            // Updating the given answer index for the current question
            copyOfQuestions[state.currentQuestionIndex].givenAnswerIndex = answerIndex;

            // Returning the updated state
            return {
                ...state,
                questions: copyOfQuestions,
            };
        });
    },

    // Function to navigate to the next question
    goToNextQuestion: () => {
        set((state) => {
            // Checking if the current question has been answered
            if (state.questions[state.currentQuestionIndex].givenAnswerIndex !== null) {
                // Determining if the quiz has been completed
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

    // Function to restart the quiz
    restart: () => {
        set((state) => ({
            // Resetting questions and their given answer indices
            questions: state.questions.map((question) => ({
                ...question,
                givenAnswerIndex: null,
            })),
            currentQuestionIndex: 0, // Resetting to the first question
            hasCompleted: false, // Resetting completion flag
        }));
    },
}));

export default useQuizStore; // Exporting the Zustand store for use in components
