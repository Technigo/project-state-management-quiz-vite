import useQuizStore from "../../stores/useQuizStore"; // Custom hook for accessing quiz state
import Button from "../button/Button"; // Custom Button component
import Card from "../card/Card"; // Custom Card component
import Title from "../title/Title";

// Creating the Summary component
const Summary = () => {
    // Using the custom hook `useQuizStore` to access the quiz state
    const restart = useQuizStore((state) => state.restart); // Function to restart the quiz
    const questions = useQuizStore((state) => state.questions); // Array of quiz questions

    // Calculating the score by counting correct answers
    const score = questions.reduce((acc, question) => acc + (question.givenAnswerIndex === question.correctAnswerIndex ? 1 : 0), 0);

    return (
        <>
            <Card>
                <Title>Summary</Title>
                <p className="text-gray-900 font-semibold">{`You scored ${score} out of a possible ${questions.length}. Good job!`}</p>
            </Card>
            <Button
                onClick={restart}
                className="mt-4 bg-blue-900 hover:bg-blue-950"
            >
                Do the quiz again
            </Button>
        </>
    );
};

export default Summary;
