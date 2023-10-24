import Summary from "./components/summary/Summary";
import useQuizStore from "./stores/useQuizStore";

export const App = () => {
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion);

    const currentQuestion = questions[currentQuestionIndex];
    const hasGuessedCorrectly = currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex;

    return (
        <>
            <div className="question-container">
                <h2>Using Zustand</h2>
                <h1>Question: {currentQuestion.text}</h1>
                <div className="option-container">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => answerCurrentQuestion(index)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {currentQuestion.givenAnswerIndex !== null && (
                    <p>{hasGuessedCorrectly ? 'You answered right' : 'You answered wrong'}</p>
                )}
                <div className="next-question">
                    <button onClick={goToNextQuestion}>Next</button>
                </div>
            </div>
            {hasCompleted && (
                <Summary />
            )}
        </>
    );
};
