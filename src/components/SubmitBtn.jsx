/* eslint-disable react/prop-types */
import useQuizStore from "../stores/useQuizStore"



export const SubmitBtn = ({answerIndex}) => {
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore(
      (state) => state.currentQuestionIndex
    );
    const submitAnswer = useQuizStore(
      (state) => state.submitAnswer
    )

    const currentQuestion = questions[currentQuestionIndex];

    const onSubmit = () => {
        if(answerIndex != null){
            submitAnswer(currentQuestion.id, answerIndex)
            return
        }
        alert("You have to choose one answer!")
    }

  return (
    <div>
        <button className="submit-btn" onClick={onSubmit}>Submit</button>
    </div>
  )
}
