import { useQuizStore } from "../../stores/useQuizStore";
import "./CurrentQuestion.css";

// Component that holds the current question
export const CurrentQuestion = () => {
  const questions = useQuizStore((state) => state.questions);
  // Get the current question index from the store
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex);
  // Get the current question from the store
  const question = questions[currentQuestionIndex];

  // If there is no question, return an error message
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // Returns the current question text
  return (
    <div className="question-container">
      <h1>{question.questionText}</h1>
    </div>
  );
};
