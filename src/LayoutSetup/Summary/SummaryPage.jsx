import useQuizStore from "../../stores/useQuizStore";
import { SWText } from "../../components/BitsAndBobs/SWText";
import style from "./Summary.module.css";

export const SummaryPage = () => {
  const { totalQuestions, totalCorrect } = useQuizStore((state) => ({
    totalQuestions: state.questions.length,
    totalCorrect: state.answers.filter((answer) => answer.isCorrect).length,
  }));

  let message;
  if (totalCorrect === 6) {
    message = "A Jedi Master, truly you are!";
  } else if (totalCorrect >= 3) {
    message = "The Force is with you - but you are not a Jedi yet";
  } else {
    message = "Maybe look into bounty hunting instead of knowledge, ey kid?";
  }

  return (
    <div className={style.summaryContainer}>
      <h1 className={style.h1}> Results </h1>
      <div className={style.textSummary}>
        <div className={style.subHeader}>
          <p>
            <SWText
              regularText="Your score:"
              textClassName={style.topOfHeader}
            />
          </p>
          <p className={style.resultsSubHeader}>
            {totalCorrect} out of {totalQuestions} points!{" "}
          </p>
        </div>
        <p>
          <SWText regularText={message} textClassName={style.lastSummary} />
        </p>
      </div>
    </div>
  );
};
