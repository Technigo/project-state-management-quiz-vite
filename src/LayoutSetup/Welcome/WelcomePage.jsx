import useQuizStore from "../../stores/useQuizStore";
import style from "./WelcomePage.module.css";

export const WelcomePage = () => {
  const start = useQuizStore((state) => state.start);

  return (
    <div className={style.welcome}>
      <h1 className={style.h1}>Duel of the Fates</h1>
      <h2 className={style.h2}>A Star Wars Quiz</h2>
      <button className={style.startButton} onClick={start}>
        START
      </button>
    </div>
  );
};
