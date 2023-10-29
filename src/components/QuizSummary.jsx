import { useNavigate } from "react-router-dom";
import useQuizStore from "../stores/useQuestions";
import "./QuizSummary.css";

export const QuizSummary = () => {
  const { answers, restart, gameResult } = useQuizStore();
  //restart, gameResult
  // Calculate the number of correct answers
  // const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="quiz-header">Quiz Summary</h2>
      {/* <p>Total Questions: {questions.length}</p>
      <p>Correct Answers: {correctAnswers}</p>*/}

      {gameResult === "win" ? (
        <h3 className="result">🌟 Victory! Quiz mastery unlocked! 🔓</h3>
      ) : (
        <h3 className="result">😉 So close! The crown's just a quiz away. 👑</h3>
      )}

      {/* Display user answers and correct answers for each question */}
      <ul className="answer-summary">
        {answers.map((answer) => {
          return (
            <li key={answer.questionId}>
              {/* <strong>Question:</strong> */}

              <p>{answer.question.questionText}</p>
              <p style={{ color: answer.isCorrect ? "limegreen" : "red" }}>
                Your Answer: {answer.answer}
              </p>
              <p>
                Correct Answer:{" "}
                {answer.question.options[answer.question.correctAnswerIndex]}
              </p>
              {/* <p>{answer.isCorrect ? "Correct" : "Incorrect"}</p> */}
            </li>
          );
        })}
      </ul>
      {console.log(gameResult)}

      <button
        className="restart-btn"
        onClick={() => {
          restart();
          navigate("/");
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
};
