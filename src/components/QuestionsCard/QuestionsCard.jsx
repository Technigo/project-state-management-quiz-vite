import { CurrentQuestion } from "../CurrentQuestion/CurrentQuestion";
import { CurrentOptions } from "../CurrentOptions/CurrentOptions";
import { useQuizStore } from "../../stores/useQuizStore";
import "./QuestionsCard.css";

export const QuestionsCard = () => {
  const { questions, currentQuestionIndex } = useQuizStore((state) => ({
    questions: state.questions,
    currentQuestionIndex: state.currentQuestionIndex,
  }));

  return (
    <div className="current-question-container">
      <CurrentQuestion
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex} />
      <CurrentOptions
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex} />
    </div>
  );
};