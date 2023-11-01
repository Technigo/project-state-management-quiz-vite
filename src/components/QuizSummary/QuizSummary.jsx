
// // component created by Mikael
// import useQuizStore from "../../stores/useQuizStore";
// import styles from "./QuizSummary.module.css";

// export const QuizSummary = () => {
//   const { answers, questions, restart } = useQuizStore();

//   const score = answers.reduce((acc, answer, index) => {
//     const question = questions[index];
//     const correctAnswerIndex = question.correctAnswerIndex;
//     const isCorrect = answer === correctAnswerIndex;
//     return isCorrect ? acc + 1 : acc;
//   }, 0);


//   let message;
//   if (score === 0) {
//     message = "You didn't get any questions right. Keep practicing!";
//   } else if (score === 1) {
//     message = "You got 1 question right. Keep practicing!";
//   } else if (score === 2) {
//     message = "You got 2 questions right. Keep practicing!";
//   } else if (score === 3) {
//     message = "You got 3 questions right. Good job!";
//   } else if (score === 4) {
//     message = "You got 4 questions right. Great job!";
//   } else {
//     message = "You got 5 questions right. Excellent!";
//   }

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.score}>{score}/5</h2>
//       <p className={styles.message}>{message}</p>
//       <button className={styles.restartButton} onClick={restart}>
//         Restart Quiz
//       </button>
//       <h2 className={styles.tryAgain}>Do you want to try again?</h2>
//     </div>
//   );
// };


// import React from "react";
// import useQuizStore from "../../stores/useQuizStore";
// import styles from "./QuizSummary.module.css";

// export const QuizSummary = () => {
//   const { answers, questions, restart, currentQuestionIndex } = useQuizStore();

//   const score = answers.filter((answer, index) => {
//     const question = questions[index];
//     return index < currentQuestionIndex ? answer === question.correctAnswerIndex : false;
//   }).length;

//   const message =
//     score === 0
//       ? "You didn't get any questions right. Keep practicing!"
//       : `You got ${score} out of 5 questions right. ${
//           score < 3 ? "Keep practicing!" : score < 5 ? "Good job!" : "Excellent!"
//         }`;

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.score}>{score}/5</h2>
//       <p className={styles.message}>{message}</p>
//       <button className={styles.restartButton} onClick={restart}>
//         Restart Quiz
//       </button>
//       <h2 className={styles.tryAgain}>Do you want to try again?</h2>
//     </div>
//   );
// };

import React from "react";
import useQuizStore from "../../stores/useQuizStore";
import styles from "./QuizSummary.module.css";

export const QuizSummary = () => {
  const { selectedAnswers, questions, restart } = useQuizStore();
  const totalQuestions = questions.length;

  // Calculate the score based on selected answers
  const score = selectedAnswers.filter((selectedAnswer, index) => {
    const question = questions[index];
    const correctAnswerIndex = question.correctAnswerIndex;
    return selectedAnswer === question.options[correctAnswerIndex].trim();
  }).length;

  // Limit the number of selected answers to display
  const displayedAnswers = selectedAnswers.slice(0, 4); // Display the first 4 selected answers

  console.log("Selected Answers:", displayedAnswers); // Log the selectedAnswers array


  console.log("Selected Answers:", selectedAnswers); // Log the selectedAnswers array
  console.log("Questions:", questions); // Log the questions array
  console.log("Score:", score); // Log the calculated score

  const message =
    score === 0
      ? "You didn't get any questions right. Keep practicing!"
      : `You got ${score} out of ${totalQuestions} questions right. ${
          score < totalQuestions
            ? "Good job!"
            : "Excellent!"
        }`;

  console.log("Message:", message); // Log the message

  return (
    <div className={styles.container}>
      <h2 className={styles.score}>{score}/{totalQuestions}</h2>
      <p className={styles.message}>{message}</p>
      <button className={styles.restartButton} onClick={restart}>
        Restart Quiz
      </button>
      <h2 className={styles.tryAgain}>Do you want to try again?</h2>
    </div>
  );
};
