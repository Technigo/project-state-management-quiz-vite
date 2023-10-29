//This page is set as the 'home' page

import useQuizStore from "../stores/useQuizStore";

import { CurrentQuestionZustand } from "../components/CurrentQuestionZustand";
import { CurrentOptions } from "../components/CurrentOptions";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { NextButton } from "../components/Buttons/NextButton";
import { ToSummaryButton } from "../components/Buttons/ToSummaryButton";
// import { Timer } from "../components/Timer";

export const Questions = () => {
    const quizOver = useQuizStore((state) => state.quizOver);
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex
    );
    const totalQuestions = useQuizStore((state) => state.questions.length);
    const seconds = useQuizStore((state) => state.seconds);

    return (
        <>
            <ProgressBar />
            <div className="questions-content-wrapper">
                <CurrentQuestionZustand />
            </div>
            <div className="options-content-wrapper">
                <CurrentOptions />
            </div>
            <div className="bottom-content-wrapper">
                <p>Your time: {seconds} seconds</p>
                {/* Conditionally render either the "Summary" button or the "Next" button */}
                {quizOver || currentQuestionIndex === totalQuestions - 1 ? (
                    // If the quiz is over or it's the last question, show the "Summary" button
                    <ToSummaryButton />
                ) : (
                    // If the quiz is not over and it's not the last question, show the "Next" button
                    <NextButton />
                )}
                {/* <Timer /> */}
            </div>
        </>
    );
};
