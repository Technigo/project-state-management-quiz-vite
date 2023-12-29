import useQuizStore from "../../stores/useQuizStore";
import style from "./ButtonRestart.module.css";

export const RestartButton = () => {
  const restart = useQuizStore((state) => state.restart);

  return (
    <div className={style.restartButtonContainer}>
      <button className={style.restartButton} type="button" onClick={restart}>
        Re-Do or do not. There is no try.
      </button>
    </div>
  );
};
