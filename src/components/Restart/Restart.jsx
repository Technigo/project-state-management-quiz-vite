import useQuizStore from "../../stores/useQuizStore";

export const Restart = () => {
  const restartQuiz = useQuizStore((state) => state.restart);

  const handleRestart = () => {
    restartQuiz(); // Reset the quiz state.
  };

  return <button onClick={handleRestart}>Restart Quiz</button>;
};
