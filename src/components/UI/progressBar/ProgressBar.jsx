import { useShallow } from "zustand/react/shallow";
import useQuizStore from "../../../stores/useQuizStore";

import styles from "./ProgressBar.module.css";
export const ProgressBar = () => {
  const { questions, currentQuestionIndex } = useQuizStore(
    useShallow((state) => ({
      questions: state.questions,
      currentQuestionIndex: state.currentQuestionIndex,
    }))
  );

  const currentPosition = (currentQuestionIndex / questions.length) * 100;

  return (
    <>
      <div className={styles.num}>
        <p>
          {currentQuestionIndex} / {questions.length}
        </p>
      </div>
      <div className={styles.bar}>
        <div className={styles.progressBar} style={{ width: currentPosition + "%" }}>
          <img src="/progressBarIcon.png" className={styles.icon} />
        </div>
      </div>
    </>
  );
};
