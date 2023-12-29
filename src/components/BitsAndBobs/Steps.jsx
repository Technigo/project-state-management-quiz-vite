import useQuizStore from "../../stores/useQuizStore";
import styles from "./Steps.module.css";

export const Steps = () => {
  const { questions, currentQuestionIndex } = useQuizStore();

  return (
    <>
      <div className={styles.num}>
        <p>
          {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>
    </>
  );
};
