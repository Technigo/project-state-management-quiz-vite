import Confetti from 'react-confetti'
import useQuizStore from "../../stores/useQuizStore";
import Button from "../button/Button";
import Card from "../card/Card"; // Custom Card component
import Title from "../title/Title";

// Creating the Question component
const Question = () => {
    const questions = useQuizStore((state) => state.questions);
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion);

    // Get the current question based on the current index
    const currentQuestion = questions[currentQuestionIndex];

    const getQuestionBackgroundColor = (index) => {
        if (currentQuestion.givenAnswerIndex === null) {
            return "bg-none border-slate-950";
        }

        if (index === currentQuestion.givenAnswerIndex) {
            return currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex
                ? "bg-emerald-600 border-emerald-600"
                : "bg-red-500 border-red-500 text-red-100";
        }

        return index === currentQuestion.correctAnswerIndex
            ? "bg-emerald-600 border-emerald-600"
            : "bg-none border-slate-950";
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
                    {currentQuestion.givenAnswerIndex === currentQuestion.correctAnswerIndex && (
                        <Confetti />
                    )}
                    {currentQuestion.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => answerCurrentQuestion(index)}
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
