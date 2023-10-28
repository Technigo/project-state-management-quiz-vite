import useQuizStore from "../stores/useQuizStore";
import "./summary.css";

export const SummaryPage = () => {
  const answers = useQuizStore((state) => state.answers);
  const questions = useQuizStore((state) => state.questions);

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].options[questions[i].correctAnswerIndex]) {
      score++;
    }
  }

  return (
    <div className="summary">
      <h2>Quiz Summary</h2>
      <h3>You scored {score} out of {questions.length} points!</h3>
      {questions.map((question, index) => (
        <div key={question.id}>
          <h4>{question.questionText}</h4>
          <p>Your Answer: {answers[index]}</p>
          <p>Correct Answer: {question.options[question.correctAnswerIndex]}</p>
        </div>
      ))}
    </div>
  );
};
