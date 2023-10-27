import React from "react";
import useQuizStore from "../../../stores/useQuizStore"

export const NextButton = () => {

  const selectedAnswerIndex = useQuizStore((state) => state.answers[state.currentQuestionIndex]?.answerIndex);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  /*
      if (selectedAnswerIndex !== undefined) {
          useQuizStore.getState().goToNextQuestion();
      }
  */
  //removed because I think this would make it go to next question without giving the user the choise? or?

  return (
    <div>
      {/*--- commented "back inn" the disabled function. *Elba ---*/}
      <button onClick={goToNextQuestion} disabled={selectedAnswerIndex === undefined}>Next question</button>
    </div>
  );
}
