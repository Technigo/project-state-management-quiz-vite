//Component is mounted in 'Questions.jsx'
import useQuizStore from "../../stores/useQuizStore";
import { Link } from "react-router-dom";

import "./Button.css";

// Defines a functional component named ToSummaryButton with link to the "/summary" route
export const ToSummaryButton = () => {
  const {stopCounter} = useQuizStore()

  const handleFinish = () => {
    stopCounter();
  }

  return (
    <div className="button-container finish-button">
    <Link to="/summary">
        <button onClick={handleFinish}>Finish</button>
    </Link>
    </div>
  )
}