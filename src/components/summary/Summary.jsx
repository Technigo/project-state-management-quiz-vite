// Importing custom hooks and components
import useQuizStore from "../../stores/useQuizStore"; // Custom hook for accessing quiz state
import Button from "../button/Button"; // Custom Button component
import Card from "../card/Card"; // Custom Card component

// Creating the Summary component
const Summary = () => {
    // Using the custom hook `useQuizStore` to access the quiz state
    const restart = useQuizStore((state) => state.restart); // Function to restart the quiz
    const questions = useQuizStore((state) => state.questions); // Array of quiz questions

    // Calculating the score by counting correct answers
    const score = questions.reduce((acc, question) => acc + (question.givenAnswerIndex === question.correctAnswerIndex ? 1 : 0), 0);

    //trying to filter the correct answer to show them, NOT WORKING
    const correctAnswers = questions
        .filter((question) => question.givenAnswerIndex === question.correctAnswerIndex);


    return (
        <Card>
            <h2>Quiz Summary</h2>
            <p>Correct Answers: {score}</p>
            <p>Incorrect Answers: {questions.length - score}</p>

            {/* trying to map the correct answers, NOT WORKING */}
            <ul>
                {correctAnswers.map((question, index) => (
                    <li key={index}>
                        Question {index + 1}: {question.options[question.correctAnswerIndex]}
                    </li>
                ))}
            </ul>
            {/* Rendering a Button component with a callback to restart the quiz */}
            <Button onClick={restart}>Restart Quiz</Button>
        </Card>
    );
};

export default Summary; // Exporting the Summary component
