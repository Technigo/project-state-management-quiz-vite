import useQuizStore from "../stores/useQuizStore"



export const StartBtn = () => {
    const goToNextQuestion = useQuizStore(state => state.goToNextQuestion)

    const onClickBtn = () => {
        goToNextQuestion()
    }
  return (
    <div>
        <button onClick={onClickBtn}>Start Quiz</button>
    </div>
  )
}
