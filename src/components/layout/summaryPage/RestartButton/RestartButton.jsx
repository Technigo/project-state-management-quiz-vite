import useQuizStore from "../../../../stores/useQuizStore";
import { Link } from "react-router-dom";
// import style from "./RestartButton.css";

export const RestartButton = () => {
  const restart = useQuizStore.getState().restart;

  return (
    <div className="button-container">
      <button type="button" onClick={restart}>
        Restart Quiz!
      </button>
    </div>
  );
};
