import useQuizStore from "../../stores/useQuizStore";

const Summary = () => {
    const restart = useQuizStore((state) => state.restart);
    const questions = useQuizStore((state) => state.questions);

    const score = questions.reduce((acc, question) => acc + (question.givenAnswerIndex === question.correctAnswerIndex ? 1 : 0), 0);

    return (
        <div className="quiz-summary">
            <h2>Quiz Summary</h2>
            <p>Total Questions: {questions.length}</p>
            <p>Correct Answers: {score}</p>
            <p>Incorrect Answers: {questions.length - score}</p>
            <button onClick={restart}>Restart Quiz</button>
        </div>
    );
};

export default Summary;
