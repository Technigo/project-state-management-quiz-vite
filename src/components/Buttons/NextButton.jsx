// This component is mounted in the page: Questions.jsx

import useQuizStore from "../../stores/useQuizStore";
import "./Button.css";
// import { Timer } from "../Timer";

export const NextButton = () => {
    // const isTimeOver = useQuizStore((state) => state.isTimeOver); //Function disabeling the player to chose an option if the countdown timer gets to 0

    // Retrieve selected answer index for the current question from the store
    const selectedAnswerIndex = useQuizStore(
        (state) => state.answers[state.currentQuestionIndex]?.answerIndex
    );

    // Handle click of the "Next" button
    const handleNext = () => {
        // Check if an option is selected for the current question
        // || isTimeOver this disables user to click options if time is up, can be placed in if statement below.
        if (selectedAnswerIndex !== undefined) {
            // If an option is selected, proceed to the next question
            useQuizStore.getState().goToNextQuestion();
        }
        // If no option is selected, do nothing (button remains disabled).
    };

    return (
        <>
            <div className="button-container next-button">
                <button
                    className="btn-donate"
                    type="button"
                    onClick={handleNext}
                    disabled={selectedAnswerIndex === undefined}
                >
                    Next
                </button>
            </div>
        </>
    );
};
