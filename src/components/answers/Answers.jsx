import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import styles from "./Answers.module.css";

const Answers = () => {
    const { currentQuestion, answerCurrentQuestion } = useCurrentQuestion();

    const hasGuessedCorrectly = currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex;

    return (
        <div className={styles.answers}>
            {currentQuestion.options.map((option, index) => (
                <button
                    key={index}
                    disabled={currentQuestion.givenAnswerIndex !== null}
                    onClick={() => answerCurrentQuestion(index)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Answers;
