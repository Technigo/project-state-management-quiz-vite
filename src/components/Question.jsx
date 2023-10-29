import { useState } from "react";
import useQuizStore from "../stores/useQuizStore";
import { SubmitBtn } from "./SubmitBtn";

export const Question = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const [answerIndex, setAnswerIndex] = useState(null)

  const currentQuestion = questions[currentQuestionIndex];

  const onChangeInput = (e) => {
    if (e.target.checked) {
      setAnswerIndex(Number(e.target.value))
    }
  }

  const numberURL = currentQuestion.numberURL;

  return (
    <div className="question-container">
        <img src={numberURL} alt={`Number ${currentQuestion.id}`} />
        <p>{currentQuestion.questionText}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => {
            return (
              <div className="option" key={option}>
                <label htmlFor={option}>
                  <input type="radio" id={option} name={currentQuestion.id} value={index} onChange={onChangeInput} />
                  {option}</label>
              </div>
            )
          })}
        </div>
        <div className="btn-container">
          <SubmitBtn answerIndex={answerIndex} />
        </div>
        <p>
          {currentQuestion.id}/7
        </p>
    </div>
  )
}

