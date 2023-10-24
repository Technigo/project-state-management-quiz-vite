// Importing a custom hook for accessing quiz state
import useQuizStore from "../stores/useQuizStore";

// Creating a custom hook named `useCurrentQuestion`
const useCurrentQuestion = () => {
    // Using the custom hook `useQuizStore` to access specific pieces of quiz state
    const questions = useQuizStore((state) => state.questions); // Array of quiz questions
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex); // Index of the current question
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion); // Function to answer the current question

    // Getting the current question object from the questions array
    const currentQuestion = questions[currentQuestionIndex];

    // Returning an object with current question and answer function
    return {
        currentQuestion, // The current question object
        answerCurrentQuestion, // The function to answer the current question
    };
};

export default useCurrentQuestion; // Exporting the custom hook `useCurrentQuestion`
