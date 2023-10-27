import { Link } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import "./board.css";

export const Board = () => {
  const { answers } = useQuizStore();

  console.log(answers);
  const questions = useQuestions((state) => state.questions);

  return (
    <>
      <div className="board-container">
        {questions.map((question) => {
          const hasAnswer = answers.some(
            (answer) => answer.questionId === question.id
          );

          return (
            <Link
              key={question.id}
              to={`/quest/${question.id}`}
              style={{ pointerEvents: hasAnswer ? "none" : "" }}
            >
              <div className="a-question" key={question.id}>
                <p>{question.id}</p>

                {answers.length > 0 &&
                  answers.map((answer) =>
                    answer.questionId === question.id ? (
                      answer.isCorrect === true ? (
                        <div className="circle"></div>
                      ) : (
                        <div className="x">❌</div>
                      )
                    ) : null
                  )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
