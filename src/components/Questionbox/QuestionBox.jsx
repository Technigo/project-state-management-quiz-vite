import useQuizStore from "../../stores/useQuizStore";
import { SubmitAnswer } from "../SubmitAnswer/SubmitAnswer";
import "./QuestionBox.css";

// This is a React component named QuestionBox that displays a question and a set of options.
export const QuestionBox = ({ question }) => {
  // Get the user's selected answer index and the disabled state from a store.
  const userAnswerIndex = useQuizStore((state) => state.userAnswer);
  const isDisabled = useQuizStore((state) => state.showMessage);

  // Handle changes when the user selects an option.
  const handleOptionChange = (event) => {
    if (!isDisabled) {
      const value = parseInt(event.target.value, 10);

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
        />
      </form>
    </div>
  );
};
