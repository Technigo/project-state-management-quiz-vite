import styles from "./ProcessAnswer.module.css";
import useQuizStore from "../../stores/useQuizStore";
import { useState, useEffect } from "react";

export const ProcessAnswer = () => {
  const {
    answers,
    questions,
    currentQuestionIndex,
    quizOver,
    submitAnswer,
  } = useQuizStore();

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

  

  const StartAgain = () => {
    setUserChoice(null);
    setResultMessage("");
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
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import useQuizStore from "../../stores/useQuizStore"; // Import your custom store
// import styles from "./ProcessAnswer.module.css";
// import { Question } from "../Question/Question";


// import { Score } from "../Score/Score";


// export const ProcessAnswer = () => {
//   const {
//     questions,
//     currentQuestionIndex,
//     submitAnswer,
//     restart,
//   } = useQuizStore(); // Use your custom store

//   const [userChoice, setUserChoice] = useState(null);
//   const [resultMessage, setResultMessage] = useState("");
//   const [correctCount, setCorrectCount] = useState(0);

//   const handleAnswer = (selectedAnswer) => {
//     setUserChoice(selectedAnswer);

//     const question = questions[currentQuestionIndex];
//     const correctAnswerIndex = question.correctAnswerIndex;
//     const correctAnswer = question.options[correctAnswerIndex];

//     if (selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
//       setResultMessage("You are correct!");
//       setCorrectCount(correctCount + 1);
//     } else {
//       setResultMessage("You are incorrect.");
//     }

//     submitAnswer(question.id, question.options.indexOf(selectedAnswer));
//   };

//   const handleNext = () => {
//     setUserChoice(null);
//     setResultMessage("");
//     if (currentQuestionIndex + 1 < questions.length) {
//       restart();
//     }
//   };

//   useEffect(() => {
//     // Add an event listener when the component mounts
//     window.addEventListener("beforeunload", (event) => {
//       // Cancel the event to prevent the browser prompt
//       event.preventDefault();
//       // Chrome requires returnValue to be set
//       event.returnValue = "";
//     });

//     // Return a cleanup function to remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("beforeunload", (event) => {
//         event.preventDefault();
//         event.returnValue = "";
//       });
//     };
//   }, []); // The empty dependency array ensures this effect only runs on component mount and unmount.

//   const showQuestion = currentQuestionIndex < questions.length;

//   return (
    
//     <div>
//       {showQuestion ? (
//         <div>
//           <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
//           <button onClick={handleNext}>Next</button>
//         </div>
//       ) : (
//         <div>
//           <Score correctCount={correctCount} totalCount={questions.length} />
//           <button onClick={restart}>Start Again!</button>
//         </div>
//       )}
//       {resultMessage && <p>{resultMessage}</p>}
//     </div>
//   );
// };





