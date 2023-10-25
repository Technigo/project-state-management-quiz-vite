import { useShallow } from "zustand/react/shallow";
import useQuizStore from "../../../stores/useQuizStore";

import styles from "./ProgressBar.module.css";
export const ProgressBar = () => {
  // This needs to be replaced to the global variables that reflect to actual quiz data.
  //   const { questions, currentQuestionIndex } = useQuizStore(
  //     useShallow((state) => ({
  //       questions: state.questions,
  //       currentQuestionIndex: state.currentQuestionIndex,
  //     }))
  //   );
  // This is just replacement.
  const currentQuestionIndex = 10;
  const questions = 20;

  const currentPosition = (currentQuestionIndex / questions) * 100;
  return (
    <div className={styles.bar}>
      <div className={styles.progressBar} style={{ width: currentPosition + "%" }}>
        <img src="/progressBarIcon.png" className={styles.icon} />
      </div>
    </div>
  );
};
