// Importing hooks, components, and styles
import useCurrentQuestion from "../../hooks/useCurrentQuestion"; // Custom hook for accessing current question
import Card from "../card/Card"; // Custom Card component
import styles from "./Question.module.css"; // CSS module for styling

// Creating the Question component
const Question = () => {
    // Using the custom hook `useCurrentQuestion` to access the current question
    const { currentQuestion } = useCurrentQuestion();

    return (
        <Card>
            {/* Rendering the question text inside a Card component */}
            <h2 className={styles.question}>
                {currentQuestion.text}
            </h2>
        </Card>
    );
}

export default Question; // Exporting the Question component
