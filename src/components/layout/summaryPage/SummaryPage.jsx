import useQuizStore from "../../../stores/useQuizStore";
import { AllText } from "../../UI/text/AllText";
import style from "./SummaryPage.module.css";

export const SummaryPage = () => {
  const { totalQuestions, totalCorrect } = useQuizStore((state) => ({
    // Calculate the total number of correct answers by filtering the answers array
    totalQuestions: state.questions.length,
    totalCorrect: state.answers.filter((answer) => answer.isCorrect).length,
  }));

  // Selects correct message based on the total number of correct answers (the players level of skill)
  let message;
  if (totalCorrect === 15) {
    message =
      "Brilliant! Congratulations! You've won the Quizzard Tournament with a perfect score of 15 points. You're a true wizard!";
  } else if (totalCorrect >= 10) {
    message =
      "Impressive Quizzardry! You've demonstrated impressive knowledge of the Harry Potter universe. Your journey into the magical world is well underway, and your grasp of the wizarding lore is commendable!";
  } else if (totalCorrect >= 5) {
    message =
      "Well on Your Way to becoming a Wizard! You're making great progress in your quest to master the enchanting world of Harry Potter. Keep going, and you'll soon become a formidable wizard. Your knowledge is growing!";
  } else {
    message =
      "Bloody hell! While you may have room for improvement, don't be disheartened! Even the most skilled wizards had to start somewhere. Continue your magical journey and consider befrending Hermione!";
  }

  return (
    <div className={style.summaryContainer}>
      <h1 className={style.h1}> Award Ceremony </h1>
      <h2 className={style.h2}> for the Qwizzard Tournament </h2>
      <div className={style.textSummary}>
        <div className={style.subHeader}>
          <p> <AllText regularText="Amidst the trials and enchantments, you've used all your spells and tricks, earning a total of:" textClassName={style.topOfHeader} /></p>
          <p className={style.resultsSubHeader}>{totalCorrect} out of {totalQuestions} points! </p>
        </div>
        <p>
          <AllText regularText={message} textClassName={style.lastSummary} />
        </p>
      </div>
    </div>
  );
}
