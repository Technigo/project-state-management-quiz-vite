import "./ProgressBar.css";
import { useQuizStore } from "../../stores/useQuizStore";

// Component that holds the progressbar
export const ProgressBar = () => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  // Get the total amount of questions
  const totalQuestions = useQuizStore((state) => state.questions.length);

  // Calculate the progress percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Returns the progressbar
  return (
    <div className="progress-wrapper">
      <span>{currentQuestionIndex + 1}/10</span>
      <div className="progress-bar">
        {/* Sets styling to the progressbar */}
        <span className="bar" style={{ width: `${progress}%` }}></span>
      </div>
    </div>
  );
};