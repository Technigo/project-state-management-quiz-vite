import styles from "./ProcessAnswer.Module.css";

import useQuizStore from "../../stores/useQuizStore";

//function to check if the answer is correct or not?
export const CheckAnswer = () => {};

export const ProcessAnswer = () => {
  return (
    <div>
      <p>Process Answer component</p>
      <div className={styles.answerOptionsBox}>
        <button onClick={CheckAnswer}>Finland</button>
        <button onClick={CheckAnswer}>Australia</button>
        <button onClick={CheckAnswer}>Indonesia</button>
        <button onClick={CheckAnswer}>Estonia</button>
      </div>
      
    </div>
  );
};
