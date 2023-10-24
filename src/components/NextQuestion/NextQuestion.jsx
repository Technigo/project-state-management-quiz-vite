import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom"
import "./nextQuestion.css";

export const NextQuestion = () => {

    const quizOver = useQuizStore((state) => state.quizOver);
    const selectedAnswerIndex = useQuizStore((state) => state.answers[state.currentQuestionIndex]?.answerIndex);

    const handleNextQuestionClick = () => {
        if (selectedAnswerIndex !== undefined) {
            useQuizStore.getState().goToNextQuestion();
        } else {
            // User has not selected an option, handle it here (e.g., show a message)
            console.log("Please select an option before proceeding.");
        }
    };

    return (
        <div>
            {/* Conditionally render the buttons based on quizStatus */}
            {quizOver === true ? (
                <Link to="/summary-page" className="summary-btn">Show summary</Link>
            ) : (
                <button onClick={handleNextQuestionClick}>Next question</button>
            )}
        </div>

    )
}