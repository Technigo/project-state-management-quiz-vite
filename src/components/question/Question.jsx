import useQuizStore from "../../stores/useQuizStore";
import Card from "../card/Card";
import styles from "./Question.module.css";

const Question = () => {
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Card>
            <h2 className={styles.question}>
                {currentQuestion.text}
            </h2>
        </Card>
    );
}

export default Question;
