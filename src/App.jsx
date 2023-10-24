import Answers from "./components/answers/answers";
import Button from "./components/button/Button";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import Summary from "./components/summary/Summary";
import useQuizStore from "./stores/useQuizStore";

export const App = () => {
    const questions = useQuizStore((state) => state.questions);
    const hasCompleted = useQuizStore((state) => state.hasCompleted);
    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container>
            <Header />
            {!hasCompleted && (
                <>
                    <Question />
                    <Answers />
                    <Button
                        disabled={currentQuestion.givenAnswerIndex === null}
                        onClick={goToNextQuestion}
                    >
                        Next
                    </Button>
                </>
            )}
            {hasCompleted && (
                <Summary />
            )}
        </Container>
    );
};
