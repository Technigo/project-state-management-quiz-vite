// import { useShallow } from "zustand/shallow";
import useQuizStore from "../../stores/useQuizStore";
import styles from "./Steps.module.css";

export const Steps = () => {
  const { questions, currentQuestionIndex } = useQuizStore();
  // useShallow((state) => ({
  //   questions: state.questions,
  //   currentQuestionIndex: state.currentQuestionIndex,
  // }))

  // const currentPosition = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      {/* <div className={styles.bar}>
        <div
          className={styles.progressBar}
          style={{ width: currentPosition + "%" }}
        ></div>
      </div> */}
      <div className={styles.num}>
        <p>
          {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>
    </>
  );
};
