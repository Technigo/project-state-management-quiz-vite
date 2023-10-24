import useQuizStore from "../../stores/useQuizStore";
import Button from "../button/Button";
import Card from "../card/Card";

const Summary = () => {
    const restart = useQuizStore((state) => state.restart);
    const questions = useQuizStore((state) => state.questions);

    const score = questions.reduce((acc, question) => acc + (question.givenAnswerIndex === question.correctAnswerIndex ? 1 : 0), 0);

    return (
        <Card>
            <h2>Quiz Summary</h2>
            <p>Correct Answers: {score}</p>
            <p>Incorrect Answers: {questions.length - score}</p>
            <Button onClick={restart}>Restart Quiz</Button>
        </Card>
    );
};

export default Summary;
