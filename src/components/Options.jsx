import "./options.css";
import useQuizStore from "../stores/useQuizStore";

export const Options = ({ options, onOptionSelect }) => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const questions = useQuizStore((state) => state.questions);
  const userAnswer = useQuizStore((state) => state.userAnswer);
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  const isCorrect = userAnswer === correctAnswerIndex;

  return (
    <div className="option">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onOptionSelect(index)}
          className={`option-button ${
            userAnswer === index ? (isCorrect ? "correct" : "incorrect") : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
