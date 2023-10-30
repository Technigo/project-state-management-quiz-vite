import "./options.css";
import useQuizStore from "../stores/useQuizStore";

export const Options = ({ options, onOptionSelect, resultTextArray }) => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const questions = useQuizStore((state) => state.questions);
  const userAnswer = useQuizStore(
    (state) => state.answers[currentQuestionIndex]
  );
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  const isCorrect = userAnswer === options[correctAnswerIndex];

  const handleOptionSelect = (index) => {
    if (!userAnswer) {
      // If no answer has been selected yet, allow selecting an answer
      onOptionSelect(index);
    }
  };

  return (
    <div className="option-wrapper">
      <div className="option">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`option-button ${
              userAnswer === option && isCorrect
                ? "correct"
                : userAnswer === option && !isCorrect
                ? "incorrect"
                : userAnswer && userAnswer !== option
                ? "hidden"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="result-text">
        {!userAnswer ? (
          ""
        ) : isCorrect ? (
          <h3>{resultTextArray[0]}</h3>
        ) : (
          <h3>{resultTextArray[1]}</h3>
        )}
      </div>
    </div>
  );
};
