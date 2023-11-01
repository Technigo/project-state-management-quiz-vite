import styles from "./ProcessAnswer.module.css";
import useQuizStore from "../../stores/useQuizStore";
import { useState, useEffect } from "react";
//import { QuizSummary } from "./QuizSummary";


export const ProcessAnswer = () => {
  // mikael edit
  const {
    answers,
    questions,
    currentQuestionIndex,
    submitAnswer,
    restart,
    goToNextQuestion,
    getCorrectedAnswer,
  } = useQuizStore();
  // mikael edit end

  const [userChoice, setUserChoice] = useState(null);
  const [resultMessage, setResultMessage] = useState("");
  /*add a "Check Answer" button that displays to the user "you are correct" or "you are incorrect" when they press on it, INSTEAD of having this display instantly when the user clicks the flag.
    Could the "Check answer" button ONLY appear AFTER the user has made a selection on the radio.
    for example:
    User reads answer -> User selects the flag (the flag is selected and outlined pink) -> user then must click "Check Answer" -> THEN display "you are correct" or "you are incorrect" ->
.   Mikael - summary page*/
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);



  // const CheckAnswer = (event) => {
  //   const selectedAnswer = event.target.value.trim();
  //   setUserChoice(selectedAnswer);

  //   const question = questions[currentQuestionIndex];
  //   const correctAnswerIndex = question.correctAnswerIndex;
  //   const correctAnswer = question.options[correctAnswerIndex].trim();

  //   console.log("Selected answer:", selectedAnswer);
  //   console.log("Correct answer:", correctAnswer);

  //   if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //     setResultMessage("You are correct!");
  //   } else {
  //     setResultMessage("You are incorrect.");
  //   }

  //   submitAnswer(question.id, question.options.indexOf(selectedAnswer));
  // };

  //commented the StartAgain function out as the next question button now calls the restart function declared in the useQuizStore. Could be deleted?
  // const StartAgain = () => {
  //   setUserChoice(null);
  //   setResultMessage("");
  // };

  // mikael edit
  // const NextQuestion = () => {
  //   const selectedAnswer = answers[currentQuestionIndex];
  //   const question = questions[currentQuestionIndex];
  //   const correctAnswerIndex = question.correctAnswerIndex;
  //   const correctAnswer = question.options[correctAnswerIndex].trim();

  //   if (selectedAnswer === correctAnswer) {
  //     setResultMessage("Correct!");
  //   } else {
  //     setResultMessage("Incorrect.");
  //   }

  //   goToNextQuestion();
  // };
  //mikael edit end

  //testing 
  const handleCheckAnswer = (event) => {
    const selectedAnswer = event.target.value.trim();
    setUserChoice(selectedAnswer);

    const question = questions[currentQuestionIndex];
    const correctAnswerIndex = question.correctAnswerIndex;
    const correctAnswer = question.options[correctAnswerIndex].trim();

    console.log("Selected answer:", selectedAnswer);
    console.log("Correct answer:", correctAnswer);

    if (userChoice !== null) {
      if (userChoice.toLowerCase() === correctAnswer.toLowerCase()) {
        setResultMessage("You are correct!");
      } else {
        setResultMessage("You are incorrect.");
      }
      submitAnswer(question.id, question.options.indexOf(selectedAnswer));
      setIsAnswerChecked(true);
    }
  };

  const handleRadioChange = (event) => {
    // setUserChoice(event.target.value);
    // setResultMessage("");
    // setIsAnswerChecked(false);
    const selectedAnswer = event.target.value.trim();
    setUserChoice(selectedAnswer);
    setResultMessage("");
    setIsAnswerChecked(false);
    getCorrectedAnswer(selectedAnswer); // Store the user's selected answer
  };

  const handleNextQuestion = () => {
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
    setUserChoice(null);
    setResultMessage("");
    setIsAnswerChecked(false);

    // Log the currentQuestionIndex after going to the next question
    console.log("Current Question Index:", useQuizStore.getState().currentQuestionIndex);
  };

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
      <div className={styles.answerOptionsBox}>
        <div className={styles.flags}>
          <label>
            <input
              type="radio"
              value="Estonia"
              // onChange={CheckAnswer}
              onChange={handleRadioChange}
              checked={userChoice === "Estonia"}
            />
            <img src="/assets/ee.svg" alt="Flag of Estonia" />
          </label>
          <label>
            <input
              type="radio"
              value="Finland"
              // onChange={CheckAnswer}
              onChange={handleRadioChange}
              checked={userChoice === "Finland"}
            />
            <img src="/assets/fi.svg" alt="Flag of Finland" />
          </label>
          <label>
            <input
              type="radio"
              value="Indonesia"
              // onChange={CheckAnswer}
              onChange={handleRadioChange}
              checked={userChoice === "Indonesia"}
            />
            <img src="/assets/id.svg" alt="Flag of Indonesia" />
          </label>
          <label>
            <input
              type="radio"
              value="Australia"
              // onChange={CheckAnswer}
              onChange={handleRadioChange}
              checked={userChoice === "Australia"}
            />
            <img src="/assets/au.svg" alt="Flag of Australia" />
          </label>
        </div>
        {/* {resultMessage && <p>{resultMessage}</p>}
        <button onClick={NextQuestion}>Next Question</button> */}
        {/* {userChoice !== null && (
          <button onClick={handleCheckAnswer}>Check Answer</button>
        )} */}
       
      {/* {isAnswerChecked && <p>{resultMessage}</p>}
        {!isAnswerChecked && userChoice !== null && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )} */}

        <div className={styles.buttons}>

          <button onClick={handleCheckAnswer}>CHECK ANSWER</button>

          {isAnswerChecked && <p>{resultMessage}</p>}

          {userChoice !== null && (
          <button onClick={handleNextQuestion}>NEXT QUESTION</button>
          )}

        <button onClick={restart}>RESTART</button>

      </div>
    </div>
  );
};
