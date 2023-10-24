import Answers from "./components/answers/answers";
import Button from "./components/button/Button";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import Summary from "./components/summary/Summary";
import useQuizStore from "./stores/useQuizStore";

export const App = () => {
    // Retrieve state and actions from the quiz store
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    // Get the current question based on the current index
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container>
            <Header />

            {/* Render different components based on quiz state */}
            {!hasCompleted && (
                <>
                    <Question />
                    <Answers />
                    {/* Render a "Next" button if an answer is selected */}
                    <Button
                        disabled={currentQuestion.givenAnswerIndex === null}
                        onClick={goToNextQuestion}
                    >
                        Next
                    </Button>
                </>
            )}

            {/* Display quiz summary if the quiz is completed */}
            {hasCompleted && (
                <Summary />
            )}
        </Container>
    );
};
