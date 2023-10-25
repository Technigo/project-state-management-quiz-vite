import styles from "./ProcessAnswer.Module.css";

import useQuizStore from "../../stores/useQuizStore";

export const ProcessAnswer = () => {
  //function to check if the answer is correct or not?

  const { answers, questions, currentQuestionIndex, quizOver, submitAnswer } =
    useQuizStore();

  const CheckAnswer = (event) => {
    console.log(`what is in value:`, event.target.value); //this works

    //if condition, if value is qual to the correct answer then display you are correct message, else display you are incorrect??? is this already in the useQuizStore?
  };

  //function for start again button to refresh quiz
  const StartAgain = () => {
    //write code here
  };

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
        <button onClick={StartAgain}>Start Again!</button>
      </div>
    </div>
  );
};
