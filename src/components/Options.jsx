import "./options.css";
import useQuizStore from "../stores/useQuizStore";
import { useState } from "react";

export const Options = ({ options, onOptionSelect, resultTextArray }) => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const questions = useQuizStore((state) => state.questions);
  const userAnswer = useQuizStore((state) => state.userAnswer);
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  const isCorrect = userAnswer === correctAnswerIndex;
  const [answered, setAnswered] = useState(false); // Track if an answer has been selected

  const handleOptionSelect = (index) => {
    if (!answered) {
      // If no answer has been selected yet, allow selecting an answer
      setAnswered(true);
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
              userAnswer === index && isCorrect
                ? "correct"
                : userAnswer === index && !isCorrect
                ? "incorrect"
                : answered && userAnswer !== index
                ? "hidden"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="result-text">
        {userAnswer === null ? (
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
