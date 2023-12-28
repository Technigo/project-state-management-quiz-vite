import useQuizStore from "../../stores/useQuizStore";
import style from "./ButtonRestart.css";

export const RestartButton = () => {
  const restart = useQuizStore((state) => state.restart);

  return (
    <div className={style.restartButtonContainer}>
      <button className={style.restartButton} type="button" onClick={restart}>
        Do or do not.
      </button>
    </div>
  );
};
