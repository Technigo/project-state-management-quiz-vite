import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import Card from "../card/Card";
import styles from "./Question.module.css";

const Question = () => {
    const { currentQuestion } = useCurrentQuestion();

    return (
        <Card>
            <h2 className={styles.question}>
                {currentQuestion.text}
            </h2>
        </Card>
    );
}

export default Question;
