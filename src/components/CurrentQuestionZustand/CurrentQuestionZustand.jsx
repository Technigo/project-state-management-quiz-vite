import useQuizStore from "../../stores/useQuizStore"; // Adjust the path accordingly
// import styles from "./CurrentQuestionZustand.module.css";
// mikaels edit
import { QuizSummary } from "../QuizSummary/QuizSummary";
// mikaels edit end

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  // mikael edit
  const quizOver = useQuizStore((state) => state.quizOver);
  // mikael edit end
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (quizOver) {
    return <QuizSummary />;
  }

  return (
    <div className="managed-component">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <h1>{question.questionText}</h1>
    </div>
  );
};
