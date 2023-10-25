import "./ProgressBar.css";
import { useQuizStore } from "../../stores/useQuizStore";

export const ProgressBar = () => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const totalQuestions = useQuizStore((state) => state.questions.length);

  // Calculate the progress percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="progress-wrapper">
      <span>{currentQuestionIndex + 1}/10</span>
      <div className="progress-bar">
        <span className="bar" style={{ width: `${progress}%` }}></span>
      </div>
    </div>
  );
};
