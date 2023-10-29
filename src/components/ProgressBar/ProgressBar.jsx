
import useQuizStore from "../../stores/useQuizStore";

import "./ProgressBar.css"

export const ProgressBar = () => {

    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

    const questions = useQuizStore((state) => state.questions);

    const totalQuestions = questions.length;

    const progress = (currentQuestionIndex / totalQuestions) * 100; 

  return (
    <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%`}}>
            {/* <p>{progress.toFixed(1)}%</p> */}
        </div>
    </div>
  )
}
