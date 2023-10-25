import "./SummaryPage.css";
import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom";

export const SummaryPage = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const score = useQuizStore((state) => state.score);
  console.log(score);

  const restartQuiz = useQuizStore.getState().restart;
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  return (
    <div className="summary-wrapper">
        {quizOver && (
        <>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}</p>
          {/* Add more summary content based on quiz data? */}
        </>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis
        recusandae reiciendis fugiat accusantium obcaecati laudantium iure
        adipisci delectus, est nobis consequuntur debitis soluta asperiores eumvero! 
      </p>

      <Link to="/">
        <button className="restart-btn" onClick={handleRestartQuiz}>
          Do the quiz again
        </button>
      </Link>
    </div>
  );
};

//
//     {quizOver ? (
//       <>
//         <h2>Quiz Completed!</h2>
//         <p>Your Score: {score}</p>
//         {/* Add more summary content based on quiz data? */}
//       </>
//     ) : (
//       <>
//         <h2>Quiz Incomplete</h2>
//         <p>Please complete the quiz to view the summary.</p>
//       </>
//     )}
//
// );
