import styles from "./ProcessAnswer.Module.css";

import useQuizStore from "../../stores/useQuizStore";

//function to check if the answer is correct or not?
export const CheckAnswer = () => {};

export const ProcessAnswer = () => {
  return (
    <div>
      <p>Process Answer component</p>
      <div className={styles.answerOptionsBox}>
        <div className={styles.flags}>
          <label>
            <input
              type="radio"
              value="estonia"
              onChange={CheckAnswer}
              checked=""
            />
            <img src="/assets/ee.svg" alt="Flag of Estonia"></img>
          </label>

          <label>
            <input
              type="radio"
              value="finland"
              onChange={CheckAnswer}
              checked=""
            />
            <img src="/assets/fi.svg" alt="Flag of Finland"></img>
          </label>
          <label>
            <input
              type="radio"
              value="indonesia"
              onChange={CheckAnswer}
              checked=""
            />
            <img src="/assets/id.svg" alt=" Flag of Indonesia"></img>
          </label>
          <label>
            <input
              type="radio"
              value="australia"
              onChange={CheckAnswer}
              checked=""
            />
            <img src="/assets/au.svg" alt="Flag of Australia"></img>
          </label>
        </div>
      </div>
    </div>
  );
};
