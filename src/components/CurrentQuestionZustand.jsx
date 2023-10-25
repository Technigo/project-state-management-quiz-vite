import React, { useState, useEffect } from 'react';
import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import "../styling/question.css"

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);


  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);


  // Calculate the progress value and max based on the current question index
  const totalQuestions = questions.length;
  const progressValue = currentQuestionIndex + 1; // Add 1 to make it 1-based
  const progressMax = totalQuestions;



  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleAnswerSelection = (answerIndex) => {
    setSelectedAnswer(answerIndex);

    // Check if the selected answer is correct
    const isAnswerCorrect = question.correctAnswerIndex === answerIndex;
    setIsCorrect(isAnswerCorrect);
  };

  useEffect(() => {
    // Reset selected answer and correctness feedback when moving to the next question
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  return (
    <div className="managed-component">
      {/* Question tilte */}
      <h1>Question: {question.questionText}</h1>
      {/* radio button answers  and check if it is correct, if it is correct, show the correct emoji✅, wrong emoji❌*/}
      <div className="radio-button-wrapper">
        {question.options.map(
          (
            option,
            index // https://www.geeksforgeeks.org/javascript-index-inside-map-function/
          ) => (
            <label
              className="radio-button-label"
              htmlFor="radio-btn"
              key={option}
            >
              <input
                type="radio"
                className="radio-button"
                name="radio-btn"
                value={option}
                onChange={() => handleAnswerSelection(index)}
                disabled={selectedAnswer !== null} // Disable the radio buttons after selection
              />
              <p>{option}</p>
              {selectedAnswer !== null && (
                <span className="answer-feedback">
                  {isCorrect && selectedAnswer === index ? '✅' : null}
                  {!isCorrect && selectedAnswer === index ? '❌' : null}
                  {question.correctAnswerIndex === index ? `(Correct Answer)` : null}
                </span>
              )}
            </label>
          )
        )}
      </div>
      <div className="next-btn-wrapper">
        {currentQuestionIndex + 1 === totalQuestions ? (
          <button className="summary-btn">
            <p>Summary</p>
          </button>
        ) : (
          <button
            className="next-btn"
            onClick={goToNextQuestion}
            disabled={selectedAnswer === null}
          >
            <p>Next</p>
          </button>
        )}
      </div>
      <div className="progress-wrapper">
        <progress
          className="progress-bar"
          value={(progressValue / progressMax) * 100} // Set value as a percentage
          max="100"
        />
        <div className="progress-text">
          {`${progressValue}/${progressMax}`}
        </div>
      </div>
    </div>
  );
};
