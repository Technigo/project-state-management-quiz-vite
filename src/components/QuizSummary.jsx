import useQuizStore from "../stores/useQuizStore";

const QuizSummary = () => {
  const { answers, restart, questions } = useQuizStore();
  const correctAnswersCount = answers.filter((answer) => answer.isCorrect).length;

  return (
    <div>
      <h2>Quiz Summary</h2>
      <p>You answered {correctAnswersCount} out of {questions.length} questions correctly!</p>
      <button onClick={restart} className="bg-blue-500 text-white p-2">Restart Quiz</button>
    </div>
  );
};

export default QuizSummary;