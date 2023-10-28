import useStore from "../../stores/useQuizStore";
import styles from "./QuestionCounter.module.css";

//this component just displays the current question count

export const QuestionCounter = () => {
  const { currentQuestionIndex } = useStore();

  return (
    <div className={styles.counterBox}>
      <p>
        Question {currentQuestionIndex + 1} of 5
      </p>
    </div>
  );
};
