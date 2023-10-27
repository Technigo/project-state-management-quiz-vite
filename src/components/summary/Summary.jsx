import Confetti from "react-confetti";
import useQuizStore from "../../stores/useQuizStore"; // Custom hook for accessing quiz state
import Button from "../button/Button"; // Custom Button component
import Card from "../card/Card"; // Custom Card component
import nationalAnthem from '../../assets/anthem.mp3';
import useSound from "use-sound";
import { useEffect } from "react";

// Creating the Summary component
const Summary = () => {
    const [playNationalAnthem, { stop }] = useSound(nationalAnthem);

    // Hook that plays the nationalAnthem file everytime the summary component mounts
    useEffect(() => {
        playNationalAnthem();
        // Stops playing music when the component is unmounted
        return () => stop();
    }, [playNationalAnthem, stop]);

    // Using the custom hook `useQuizStore` to access the quiz state
    const restart = useQuizStore((state) => state.restart); // Function to restart the quiz
    const questions = useQuizStore((state) => state.questions); // Array of quiz questions

    // Calculating the score by counting correct answers
    const score = questions.reduce((acc, question) => acc + (question.givenAnswerIndex === question.correctAnswerIndex ? 1 : 0), 0);

    return (
        <>
            {/* If you answered all the questions correctly it will return confetti. */}
            {score === questions.length && (
                <Confetti />
            )}
            <Card>
                <img
                    alt="A picture of the king of Sweden."
                    src="/img/11.jpg"
                    className="rounded-full h-24 w-24 object-cover mx-auto mb-8"
                />
                <p className="text-gray-900 font-semibold mb-8 text-center">{`You scored ${score} out of a possible ${questions.length} 🇸🇪`}</p>
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
