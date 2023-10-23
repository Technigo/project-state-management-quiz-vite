import useQuizStore from "../stores/useQuizStore";
import "./summary.css";

export const SummaryPage = () => {
  const answers = useQuizStore((state) => state.answers);
  const questions = useQuizStore((state) => state.questions);

  return (
    <div className="summary">
      <h2>Quiz Summary</h2>
      {questions.map((question, index) => (
        <div key={question.id}>
          <h3>{question.questionText}</h3>
          <p>Your Answer: {question.options[answers[index]]}</p>
          <p>Correct Answer: {question.options[question.correctOption]}</p>
        </div>
      ))}
    </div>
  );
};