import { Link } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import "./board.css";
import { useEffect } from "react";

export const Board = () => {
  const { answers } = useQuizStore();
  const checker = (qId) => {
    answers.map((answer) => {
      if (answer.questionId === qId && answer.isCorrect === true) {
        console.log("YES", answer.questionId, qId);
      }
    });
  };
  useEffect(() => {
    answers.map((answer) => console.log(answer.questionId, answer.isCorrect));
  }, [answers]);
  console.log(answers);
  const questions = useQuestions((state) => state.questions);

  return (
    <>
      <div className="board-container">
        {questions.map((question) => (
          <Link
            key={question.id}
            to={`/quest/${question.id}`}
            onClick={checker(question.id)}
          >
            <div className="a-question" key={question.id}>
              <p>{question.id}</p>
              {/* {answers.length > 0 ? (
                <div className="circle"></div>
              ) : (
                <div className="x">❌</div>
              )} */}
              {answers.map((answer) => {
                answer.questionId === question.id && answer.isCorrect === true
                  ? console.log("CHECK!" + answer.questionId + question.id)
                  : console.log("TRY AGAIN" + question.id);
              })}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
