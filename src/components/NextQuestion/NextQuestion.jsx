import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./nextQuestion.css";
import { BiSolidChevronRight } from "react-icons/bi";

export const NextQuestion = () => {
  const [errorMessage, setErrorMessage] = useState(null); // State variable for error message
  const quizOver = useQuizStore((state) => state.quizOver);
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]?.answerIndex
  );

  console.log("quizOver", quizOver);
  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      useQuizStore.getState().goToNextQuestion();
      // Clear any previous error messages
      setErrorMessage(null);
    } else {
      // User has not selected an option, set the error message
      setErrorMessage("Oopsie 👻, you need to choose an option!");
    }
  };

  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  // Check if the current question is the last one
  const isLastQuestion = currentQuestionIndex === 9;
  const showGetScoreButton = isLastQuestion && quizOver === true;
  console.log("currentQuestionIndex", currentQuestionIndex);

  return (
    <div className="next-summary-btn">
      {showGetScoreButton ? (
        <Link to="/summary-page">
          <div className="summary-btn btn-layout">
            <span className="btn-text">Get your score</span>
          </div>
        </Link>
      ) : (
        <div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button
            className="next-btn btn-layout"
            onClick={handleNextQuestionClick}
          >
            <div id="btn-pseudocontent"></div>
            <div className="next-btn-content">
              <span className="btn-text">Next</span>
              <BiSolidChevronRight className="next-icon" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

// // Check if the current question is the last one
// const isLastQuestion = currentQuestionIndex === 9;

// return (
//   <div className="next-summary-btn">
//     {isLastQuestion && quizOver ? (
//       // Render the "Get Your Score" link button when on the last question
//       <Link to="/summary-page">
//         <div className="summary-btn btn-layout">
//           <span className="btn-text">Get your score</span>
//         </div>
//       </Link>
//     ) : (
//       // Render the "Next" button for other questions
//       <div>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button
//           className="next-btn btn-layout"
//           onClick={handleNextQuestionClick}
//         >
//           <div id="btn-pseudocontent"></div>
//           <div className="next-btn-content">
//             <span className="btn-text">Next</span>
//             <BiSolidChevronRight className="next-icon" />
//           </div>
//         </button>
//       </div>
//     )}
//   </div>
// );

//   return (
//     <div className="next-summary-btn">
//       {/* Conditionally render the buttons based on quizStatus */}
//       {quizOver === true ? (
//         <Link to={`/summary-page`}>
//           <div className="summary-btn btn-layout">
//             <span className="btn-text">continue</span>
//           </div>
//         </Link>
//       ) : (
//         <button
//           className="next-btn btn-layout"
//           onClick={handleNextQuestionClick}
//         >
//           <div className="next-btn-content">
//             <span className="btn-text">next</span>
//             <BiSolidChevronRight className="next-icon" />
//           </div>
//         </button>
//       )}
//     </div>
//   );
// };
