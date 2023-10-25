import useQuizStore from "../../stores/useQuizStore";
import "./Restart.css";

export const Restart = () => {
  const restartQuiz = useQuizStore((state) => state.restart);

  const handleRestart = () => {
    restartQuiz(); // Reset the quiz state.
  };

  return (
    <button className="restart-button" onClick={handleRestart}>
      Restart Quiz
    </button>
  );
};
