// Importing hooks and styles
import useQuizStore from "../../stores/useQuizStore"; // Custom hook for accessing quiz state
import styles from "./Header.module.css"; // CSS module for styling

// Creating the Header component
const Header = () => {
    // Using the custom hook `useQuizStore` to access the quiz state
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Swede Quiz</h1>
            {!hasCompleted && (
                <div className={styles.counter}>
                    {`${currentQuestionIndex + 1} / ${questions.length}`} {/* Rendering the question count */}
                </div>
            )}
        </div>
    );
}

export default Header; // Exporting the Header component
