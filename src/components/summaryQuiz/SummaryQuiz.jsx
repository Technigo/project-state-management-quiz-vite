
import React from "react";
import { useQuizStore } from "../../stores/useQuizStore";

const QuizSummary = () => {
    const answers = useQuizStore((state) => state.answers);
    const questions = useQuizStore((state) => state.questions);

    // Calculate the total score based on correct answers
    const totalScore = answers.reduce((score, answer) => {
        return answer.isCorrect ? score + 1 : score;
    }, 0);

    return (
        <div className="quiz-summary">
            <h2>Quiz Summary</h2>
            <p>Total Questions: {questions.length}</p>
            <p>Correct Answers: {totalScore}</p>
            <p>Incorrect Answers: {questions.length - totalScore}</p>
            <button onClick={() => useQuizStore.restart()}>Restart Quiz</button>
        </div>
    );
};

export default QuizSummary;
