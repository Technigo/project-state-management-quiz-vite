import useQuizStore from "../../stores/useQuizStore";
import styles from "./Answers.module.css";

const Answers = () => {
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion);

    const currentQuestion = questions[currentQuestionIndex];
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
