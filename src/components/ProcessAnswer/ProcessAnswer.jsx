import styles from "./ProcessAnswer.module.css";
import useQuizStore from "../../stores/useQuizStore";
import { useState, useEffect } from "react";

export const ProcessAnswer = () => {
  // mikael edit
  const {
    answers,
    questions,
    currentQuestionIndex,
    submitAnswer,
    restart,
    goToNextQuestion,
  } = useQuizStore();
  // mikael edit end

  const [userChoice, setUserChoice] = useState(null);
  const [resultMessage, setResultMessage] = useState("");

  const CheckAnswer = (event) => {
    const selectedAnswer = event.target.value.trim();
    setUserChoice(selectedAnswer);

    const question = questions[currentQuestionIndex];
    const correctAnswerIndex = question.correctAnswerIndex;
    const correctAnswer = question.options[correctAnswerIndex].trim();

    console.log("Selected answer:", selectedAnswer);
    console.log("Correct answer:", correctAnswer);

    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setResultMessage("You are correct!");
    } else {
      setResultMessage("You are incorrect.");
    }

    submitAnswer(question.id, question.options.indexOf(selectedAnswer));
  };

  //commented the StartAgain function out as the next question button now calls the restart function declared in the useQuizStore. Could be deleted?
  // const StartAgain = () => {
  //   setUserChoice(null);
  //   setResultMessage("");
  // };

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

  useEffect(() => {
    // Add an event listener when the component mounts
    window.addEventListener("beforeunload", (event) => {
      // Cancel the event to prevent the browser prompt
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = "";
    });

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", (event) => {
        event.preventDefault();
        event.returnValue = "";
      });
    };
  }, []); // The empty dependency array ensures this effect only runs on component mount and unmount.

  return (
    <div>
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
        {resultMessage && <p>{resultMessage}</p>}
        <button onClick={NextQuestion}>Next Question</button>
      </div>

      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
};
