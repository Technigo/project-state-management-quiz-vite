import Confetti from 'react-confetti';
import useSound from 'use-sound';
import right from '../../assets/right.mp3'
import wrong from '../../assets/wrong.mp3'
import useQuizStore from "../../stores/useQuizStore";
import Button from "../button/Button";
import Card from "../card/Card";
import Title from "../title/Title";

// Creating the Question component
const Question = () => {
    const [playRight] = useSound(right)
    const [playWrong] = useSound(wrong)

    // Accessing necessary state and actions using custom hook
    const questions = useQuizStore((state) => state.questions); // Array of questions
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion); // Function to go to the next question
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex); // Index of current question
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion); // Function to answer current question

    // Get the current question based on the current index
    const currentQuestion = questions[currentQuestionIndex];

    const colorMap = {
        right: "bg-emerald-600 border-emerald-600",
        wrong: "bg-red-500 border-red-500",
        default: "bg-none border-slate-950",
    }

    // Define a function to determine the background color of each option based on the user's answer
    const getQuestionBackgroundColor = (index) => {
        if (currentQuestion.givenAnswerIndex === null) {
            return colorMap.default; // Default background when no answer is given
        }

        if (index === currentQuestion.givenAnswerIndex) {
            return currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex
                ? colorMap.right
                : colorMap.wrong;
        }

        return index === currentQuestion.correctAnswerIndex
            ? colorMap.right
            : colorMap.default;
    }

    return (
        <>
            <Card>
                <img
                    alt={currentQuestion.text}
                    src={currentQuestion.image}
                    className="rounded-full h-24 w-24 object-cover mx-auto mb-4"
                />
                <Title>
                    {currentQuestion.text}
                </Title>
                <div className="flex flex-col gap-4">
                    {/* Confetti effect when the correct answer is chosen */}
                    {currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex && (
                        <Confetti />
                    )}
                    {/* Mapping over answer options to display as buttons */}
                    {currentQuestion.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                // Playing different sounds depending on right or wrong answer.
                                answerCurrentQuestion(index);
                                if (index === currentQuestion.correctAnswerIndex) {
                                    playRight();
                                } else {
                                    playWrong();
                                }
                            }}
                            disabled={currentQuestion.givenAnswerIndex !== null}
                            className={`border-2 text-gray-900 ${getQuestionBackgroundColor(index)}`}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            </Card>
            <Button
                onClick={goToNextQuestion}
                disabled={currentQuestion.givenAnswerIndex === null}
                className="mt-4 bg-blue-900 hover:bg-blue-950 disabled:bg-gray-800"
            >
                Next
            </Button>
        </>
    );
}

export default Question;
