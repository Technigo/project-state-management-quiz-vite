import useQuizStore from "../../stores/useQuizStore";
import { QuestionBox } from "../Questionbox/QuestionBox";
import "./CurrentQuestionZustand.css";

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

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
