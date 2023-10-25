import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom";
import "./nextQuestion.css";
import { BiSolidChevronRight } from "react-icons/bi";

export const NextQuestion = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]?.answerIndex
  );

  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      useQuizStore.getState().goToNextQuestion();
    } else {
      // User has not selected an option, handle it here (e.g., show a message)
      console.log("Please select an option before proceeding.");
    }
  };

  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  return (
    <div className="next-summary-btn">
      {quizOver === true || currentQuestionIndex === 9 ? (
        <Link to={`/summary-page`}>
          <div className="summary-btn btn-layout">
            <span className="btn-text">continue</span>
            <BiSolidChevronRight className="next-icon" />
          </div>
        </Link>
      ) : (
        <button
          className="next-btn btn-layout"
          onClick={handleNextQuestionClick}
        >
          <div id="btn-pseudocontent"></div>
          <div className="next-btn-content">
            <span className="btn-text">next</span>
            <BiSolidChevronRight className="next-icon" />
          </div>
        </button>
      )}
    </div>
  );
};

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
