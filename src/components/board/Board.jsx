import { Link, useNavigate } from "react-router-dom";
import useQuestions from "../../stores/useQuestions";
import useQuizStore from "../../stores/useQuestions";
import "./board.css";
import { useEffect, useState } from "react";

export const Board = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  
  const { answers } = useQuizStore();

  const questions = useQuestions((state) => state.questions);
  const navigate = useNavigate();

  const checkIfWon = () => {
    let row1 = [1,2,3];
    let row2 = [4,5,6];
    let row3 = [7,8,9];

    let win1 = [false, false, false]
    let win2 = [false, false, false]
    let win3 = [false, false, false]

    answers.map(answer => row1.find(num => num === answer.questionId) ? win1[answer.questionId-1] = answer.isCorrect : null)
    answers.map(answer => row2.find(num => num === answer.questionId) ? win2[answer.questionId-4] = answer.isCorrect : null)
    answers.map(answer => row3.find(num => num === answer.questionId) ? win3[answer.questionId-7] = answer.isCorrect: null)

    let winningRow1 = win1[0] && win1[1] && win1[2]
    let winningRow2 = win2[0] && win2[1] && win2[2]
    let winningRow3 = win3[0] && win3[1] && win3[2]

    let winningCol1 = win1[0] && win2[0] && win3[0]
    let winningCol2 = win1[1] && win2[1] && win3[1]
    let winningCol3 = win1[2] && win2[2] && win3[2]

    let winningDia1 = win1[0] && win2[1] && win3[2]
    let winningDia2 = win1[2] && win2[1] && win3[0]

    if (winningRow1 || winningRow2 || winningRow3 || winningCol1 || winningCol2 || winningCol3 || winningDia1 || winningDia2) navigate("/summary")
  }

  useEffect(checkIfWon, [answers])

  return (
    <>
      <div className="board-container">
        {questions.map((question) => (
          <Link
            key={question.id}
            to={`/quest/${question.id}`}
            disabled={isDisabled}
          >
            <div key={question.id} className="a-question" >
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
