// import React, { useState } from "react";
// import Score from "./Score";
// import { CurrentQuestionZustand } from "../CurrentQuestionZustand/CurrentQuestionZustand";

// export const Quiz = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [correctCount, setCorrectCount] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setCorrectCount(correctCount + 1);
//     }
//     setTotalCount(totalCount + 1);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   return (
//     <div>
//       <Score correctCount={correctCount} totalCount={totalCount} />
//       {/* <CurrentQuestionZustand
//         question={questions[currentQuestionIndex]}
//         onAnswer={handleAnswer} 
//       />  */}
//     </div>
//   );
// };

import React, { useState } from "react";
import Score from "../Score/Score";
import { useQuizStore } from "../../stores/useQuizStore";

export const Quiz = () => {
  const { questions, currentQuestionIndex, submitAnswer, goToNextQuestion, restart } = useQuizStore();
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
    setTotalCount(totalCount + 1);

    // Handle the answer and update the store using submitAnswer
    submitAnswer(isCorrect);

    // Go to the next question
    goToNextQuestion();
  };

  // Use the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <React.Fragment>
    <div>
      <Score correctCount={correctCount} totalCount={questions.length} />
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.questionText}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(index)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Quiz is over
        <div>
          <p>Quiz is over!</p>
          <button onClick={restart}>Restart Quiz</button>
        </div>
      )}
    </div>
    </React.Fragment>
  );
};

