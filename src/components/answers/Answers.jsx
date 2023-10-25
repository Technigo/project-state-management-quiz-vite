// Importing a custom hook and CSS module for styling
import useCurrentQuestion from "../../hooks/useCurrentQuestion"; // Custom hook for managing current question state
import styles from "./Answers.module.css"; // CSS module for styling

// Creating the Answers component
const Answers = () => {
    // Destructuring values from the custom hook
    const { currentQuestion, answerCurrentQuestion } = useCurrentQuestion();

    // Checking if the user has guessed correctly
    const hasGuessedCorrectly = currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex;

    // Check if the user's answer is correct
    const isCorrect = currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex;

    return (
        <div className={styles.answers}>
            {/* Mapping over the options of the current question */}
            {currentQuestion.options.map((option, index) => (
                <button
                    key={index}
                    // Disabling the button if an answer has already been given
                    disabled={currentQuestion.givenAnswerIndex !== null}

                    // Handling the user's answer click event
                    onClick={() => answerCurrentQuestion(index)}
                    // if correct answer make buttons green, otherwise red
                    className={currentQuestion.givenAnswerIndex === index
                        ? index === currentQuestion.correctAnswerIndex
                            ? styles.correctButton
                            : styles.wrongButton
                        : styles.defaultButton
                    }

                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Answers;

