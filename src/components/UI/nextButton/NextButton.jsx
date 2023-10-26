import React from "react";
import useQuizStore from "../../../stores/useQuizStore"

/*Component for next page. Do we need to link it diffferent on every page? Not sure how to do this.. Is it possible to make an if/else statement, like: if on q1 go to q2, else on q2 go to q3 and so on*/


/*goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },*/



export const NextButton = () => {

    const selectedAnswerIndex = useQuizStore((state) => state.answers[state.currentQuestionIndex]?.answerIndex);

    const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

    if (selectedAnswerIndex !== undefined) {
        useQuizStore.getState().goToNextQuestion();
    }

    return (
        <div>
            {/*--- commented out the disabled function. When not commented out it disables the button until an answer is chosen ---*/}
            
                <button onClick={goToNextQuestion} /*disabled={selectedAnswerIndex === undefined}*/>Next question</button>
        </div>
    );

    }

