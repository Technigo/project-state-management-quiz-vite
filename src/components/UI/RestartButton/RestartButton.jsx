import useQuizStore from "../../../../stores/useQuizStore";
import style from "./RestartButton.css";

export const RestartButton = () => {
  const restart = useQuizStore((state) => state.restart);

  return (
    <div className="button-container">
      <button type="button" onClick={restart}>
        Restart Quiz!
      </button>
    </div>
  );
};

