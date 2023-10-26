import useQuizStore from "../../stores/useQuizStore";
import { SubmitAnswer } from "../SubmitAnswer/SubmitAnswer";
import "./QuestionBox.css";

export const QuestionBox = ({ question }) => {
  const userAnswerIndex = useQuizStore((state) => state.userAnswer);
  const isDisabled = useQuizStore((state) => state.showMessage);

  const handleOptionChange = (event) => {
    if (!isDisabled) {
      const value = parseInt(event.target.value, 10);
      // useQuizStore.setState({ userAnswer: question.options[value] });
      useQuizStore.setState({ userAnswer: value });
    }
  };

  return (
    <div>
      <h3>{question.questionText}</h3>
      <form>
        {question.options.map((option, index) => (
          <label key={index} className="radio-buttons">
            <input
              type="radio"
              name={`question${question.id}`}
              value={index}
              // checked={userAnswer && userAnswer.text === option.text}
              checked={userAnswerIndex === index}
              onChange={handleOptionChange}
              disabled={isDisabled}
              required
            />
            <span className="checkmark"></span>
            {option.text}
          </label>
        ))}

        <SubmitAnswer
          questionId={question.id}
          selectedOption={userAnswerIndex}
          //selectedOption={question.options}
        />
      </form>
    </div>
  );
};
