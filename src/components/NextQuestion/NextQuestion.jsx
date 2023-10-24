import { useQuizStore } from "../../stores/useQuizStore";

export const NextQuestion = () => {

    // Assume you have a button or user action to go to the next question, e.g., a "Next" button
    const handleNextQuestionClick = () => {
        useQuizStore.getState().goToNextQuestion();
    };

    // Render your quiz component
    // const QuizComponent = () => {
    //     const quizState = useQuizStore();

    //     if (quizState.quizOver) {
    //         // You can display the quiz results or a completion message when the quiz is over.
    //         return (
    //             <>
    //                 <p>Quiz is over! Display results or completion message here.</p>
    //             </>
    //         );
    //     }

    return (
        <div>
            {/* <p>Question {quizState.currentQuestionIndex + 1}:</p>
                <p>{quizState.questions[quizState.currentQuestionIndex].questionText}</p>
                Render answer choices and handle user's answer submission */}
            <button onClick={handleNextQuestionClick}>Next</button>
        </div>

    )
}

// Render the current question and answer choices here based on `quizState.questions[quizState.currentQuestionIndex]`
