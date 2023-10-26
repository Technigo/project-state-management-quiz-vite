import "./options.css";
import useQuizStore from "../stores/useQuizStore";

export const Options = ({ options, onOptionSelect, resultTextArray }) => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const questions = useQuizStore((state) => state.questions);
  const userAnswer = useQuizStore((state) => state.userAnswer);
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  const isCorrect = userAnswer === correctAnswerIndex;

  return (
    <div className="option-wrapper">
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
      <div className="result-text">
        {userAnswer === null ? (
          ""
        ) : (
          isCorrect ? (
            <h3>{resultTextArray[0]}</h3>
          ) : (
            <h3>{resultTextArray[1]}</h3>
          )
        )}
      </div>
    </div>
  );
};
