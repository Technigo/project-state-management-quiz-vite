import useQuizStore from "../../stores/useQuizStore";
import { SubmitAnswer } from "../SubmitAnswer/SubmitAnswer";

export const QuestionBox = ({ question }) => {
  const selectedAnswer = useQuizStore((state) => {
    const answer = state.answers.find((a) => a.questionId === question.id);
    return answer ? answer.answerIndex : null;
  });

  const submitAnswer = useQuizStore((state) => state.submitAnswer);

  const handleOptionChange = (event) => {
    const value = parseInt(event.target.value, 10);
    submitAnswer(question.id, value);
  };

  return (
    <div className="question-box">
      <h3>{question.questionText}</h3>
      <form>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`question${question.id}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
        <SubmitAnswer
          questionId={question.id}
          selectedOption={selectedAnswer}
        />
      </form>
    </div>
  );
};
