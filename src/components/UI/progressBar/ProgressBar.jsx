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

  console.log(currentQuestionIndex, questions.length);
  const currentPosition = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.progressBar} style={{ width: currentPosition + "%" }}>
          <img src="/progressBarIcon.png" className={styles.icon} />
        </div>
      </div>
      <div className={styles.num}>
        <p>
          {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>
    </>
  );
};
