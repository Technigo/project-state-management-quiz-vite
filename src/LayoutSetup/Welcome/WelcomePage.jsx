import useQuizStore from "../../stores/useQuizStore";
import style from "./WelcomePage.css";
import { SWText } from "../../components/BitsAndBobs/SWText";

export const WelcomePage = () => {
  const start = useQuizStore((state) => state.start);

  return (
    <div className={style.welcome}>
      <h3 className={style.h3}>Beep Boop Bleep</h3>
      <h1 className={style.h1}>Duel of the Fates</h1>
      <h2 className={style.h2}>A Star Wars Quiz</h2>
      {/* <div className={style.textWelcomeBox}>
        <SWText
          regularText="Dear Padawan, show us if you are ready to Do or Do not!"
          textClassName={style.welcomeText}
        />
      </div> */}
      <button className={style.startButton} onClick={start}>
        START
      </button>
    </div>
  );
};
