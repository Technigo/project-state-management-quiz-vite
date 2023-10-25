import styles from "./ProcessAnswer.module.css";
import useQuizStore from "../../stores/useQuizStore";
import { useState } from "react";



export const ProcessAnswer = () => {
  
  // mikael edit
  const { answers, questions, currentQuestionIndex, submitAnswer, goToNextQuestion } = useQuizStore();
  // mikael edit end

  const [userChoice, setUserChoice] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  const CheckAnswer = (event) => {
    const selectedAnswer = event.target.value.trim(); // Trim to remove extra spaces

    setUserChoice(selectedAnswer);

    const question = questions[currentQuestionIndex];
    const correctAnswerIndex = question.correctAnswerIndex;
    const correctAnswer = question.options[correctAnswerIndex].trim(); // Trim to remove extra spaces

    console.log("Selected answer:", selectedAnswer);
    console.log("Correct answer:", correctAnswer);

    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setResultMessage("You are correct!");
    } else {
      setResultMessage("You are incorrect.");
    }

    submitAnswer(question.id, question.options.indexOf(selectedAnswer));
  };

  const StartAgain = () => {
    setUserChoice(null);
    setResultMessage("");
  };
// mikael edit
const NextQuestion = () => {
  const selectedAnswer = answers[currentQuestionIndex];
  const question = questions[currentQuestionIndex];
  const correctAnswerIndex = question.correctAnswerIndex;
  const correctAnswer = question.options[correctAnswerIndex].trim();

  if (selectedAnswer === correctAnswer) {
    setResultMessage("Correct!");
  } else {
    setResultMessage("Incorrect.");
  }

  goToNextQuestion();
};
//mikael edit end

  return (
    <div>
      <p>Process Answer component</p>
      <div className={styles.answerOptionsBox}>
        <div className={styles.flags}>
          <label>
            <input
              type="radio"
              value="Estonia"
              onChange={CheckAnswer}
              checked={userChoice === "Estonia"}
            />
            <img src="/assets/ee.svg" alt="Flag of Estonia" />
          </label>
          <label>
            <input
              type="radio"
              value="Finland"
              onChange={CheckAnswer}
              checked={userChoice === "Finland"}
            />
            <img src="/assets/fi.svg" alt="Flag of Finland" />
          </label>
          <label>
            <input
              type="radio"
              value="Indonesia"
              onChange={CheckAnswer}
              checked={userChoice === "Indonesia"}
            />
            <img src="/assets/id.svg" alt="Flag of Indonesia" />
          </label>
          <label>
            <input
              type="radio"
              value="Australia"
              onChange={CheckAnswer}
              checked={userChoice === "Australia"}
            />
            <img src="/assets/au.svg" alt="Flag of Australia" />
          </label>
        </div>
        <button onClick={StartAgain}>Start Again!</button>
      </div>
      {resultMessage && <p>{resultMessage}</p>}
      {/* // mikael edit */}
     <button onClick={NextQuestion}>Next</button></div>
    //  mikael edit end
    
  );

};
