import useQuizStore from "../../stores/useQuizStore";
import { QuestionBox } from "../Questionbox/QuestionBox";
import "./CurrentQuestionZustand.css";

// This is a React component named CurrentQuestionZustand.
export const CurrentQuestionZustand = () => {
  // Get the list of questions and the current question index from a store
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  // Retrieve the current question based on the index.
  const question = questions[currentQuestionIndex];

  // If there is no question found, display an error message.
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // Render the main content of the component.
  return (
    <div className="managed-component">
      <h1>Trivia Time</h1>
      <h2>with lemons 🍋</h2>
      <div className="question-box">
        <QuestionBox question={question} />
      </div>
      <img src={question.image} alt="Image related to question" />
    </div>
  );
};
