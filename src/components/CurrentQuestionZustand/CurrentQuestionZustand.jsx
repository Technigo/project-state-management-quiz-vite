import useQuizStore from "../../stores/useQuizStore"; // Adjust the path accordingly
import { CounterComponent } from "../CounterComponent/CounterComponent";
import { ProcessAnswer } from "../ProcessAnswer/ProcessAnswer";

import styles from "./CurrentQuestionZustand.module.css";

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  //function for start again button to refresh quiz
  const StartAgain = () => {
    //write code here
  };

  return (
    <div className="managed-component">
      <h2>Question</h2>
      <h1>
        {currentQuestionIndex}.{question.questionText}
      </h1>
      <p>
        <ProcessAnswer />
        <CounterComponent />
      </p>
      <button onClick={StartAgain}>Start Again!</button>
    </div>
  );
};
