import useQuizStore from "../../stores/useQuizStore";
import Card from "../card/Card"; // Custom Card component

// Creating the Question component
const Question = () => {
    const questions = useQuizStore((state) => state.questions);
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const answerCurrentQuestion = useQuizStore((state) => state.answerCurrentQuestion);

    // Get the current question based on the current index
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Card>
            <div>
                <h2 className="">
                    {currentQuestion.text}
                </h2>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        // Disabling the button if an answer has already been given
                        disabled={currentQuestion.givenAnswerIndex !== null}
                        // Handling the user's answer click event
                        onClick={() => answerCurrentQuestion(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="">
                <button
                    disabled={currentQuestion.givenAnswerIndex === null}
                    onClick={goToNextQuestion}
                >
                    Next
                </button>
            </div>
        </Card>
    );
}

export default Question;
