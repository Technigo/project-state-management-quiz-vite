
import useQuizStore from "../stores/useQuizStore"
import { Link } from "react-router-dom"

export const Start = () => {
    
  const { startCounter } = useQuizStore();

  return (
    <div className="start-page">
    <div className="start-content-wrapper">
        <h1>Hi quizzer!</h1>
        <p>Are you ready to be quizzed about some fun stuff?</p>
    </div>
    <div className='button-container start-button'>
        <Link to="/questions"><button onClick={startCounter}>Let's Go!</button></Link>
    </div>
    </div>
  )
}
