import { Link } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import "./board.css";
import { useEffect, useState } from "react";

export const Board = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { answers } = useQuizStore();

  // const checker = (qId) => {
  //   // setIsDisabled(true);
  //   answers.map((answer) => {
  //     if (answer.questionId === qId) {
  //       console.log("YES", answer.questionId, qId);
  //       setIsDisabled(true);
  //     } else {
  //       setIsDisabled(false);
  //     }
  //     // if (answer.questionId === qId && answer.isCorrect === true) {
  //     //   console.log("YES", answer.questionId, qId);
  //     // }
  //   });
  // };

  // useEffect(() => {
  //   // answers.map((answer) => console.log(answer.questionId, answer.isCorrect));
  //   checker();
  // }, [answers]);
  // console.log(answers);
  const questions = useQuestions((state) => state.questions);

  return (
    <>
      <div className="board-container">
        {questions.map((question) => (
          <Link
            key={question.id}
            to={`/quest/${question.id}`}
            disabled={isDisabled}
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
        ))}
      </div>
    </>
  );
};
