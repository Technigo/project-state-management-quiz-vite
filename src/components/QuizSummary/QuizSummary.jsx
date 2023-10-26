
// component created by Mikael
import useQuizStore from "../../stores/useQuizStore";
import styles from "./QuizSummary.module.css";

export const QuizSummary = () => {
  const { answers, questions, restart } = useQuizStore();

  const score = answers.reduce((acc, answer, index) => {
    const question = questions[index];
    const correctAnswerIndex = question.correctAnswerIndex;
    const isCorrect = answer === correctAnswerIndex;
    return isCorrect ? acc + 1 : acc;
  }, 0);


  let message;
  if (score === 0) {
    message = "You didn't get any questions right. Keep practicing!";
  } else if (score === 1) {
    message = "You got 1 question right. Keep practicing!";
  } else if (score === 2) {
    message = "You got 2 questions right. Keep practicing!";
  } else if (score === 3) {
    message = "You got 3 questions right. Good job!";
  } else if (score === 4) {
    message = "You got 4 questions right. Great job!";
  } else {
    message = "You got 5 questions right. Excellent!";
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.score}>{score}/5</h2>
      <p className={styles.message}>{message}</p>
      <button className={styles.restartButton} onClick={restart}>
        Restart Quiz
      </button>
      <h2 className={styles.tryAgain}>Do you want to try again?</h2>
    </div>
  );
};
