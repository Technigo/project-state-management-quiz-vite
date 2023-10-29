import useQuizStore from "../../../stores/useQuizStore";
import { AllText } from "../../UI/text/AllText";
import style from "./QuizQandA.module.css";

export const QuizQuestion = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const question = questions[currentQuestionIndex];
  const currentQuestion = questions[currentQuestionIndex];

  if (!question) {
    return <AllText regularText="Oh no! I could not find the current question!" />;
  }

  return (
    <div>
      <div className={style.levelContainer}>
        <AllText regularText="Task Level:" />
        <img className={style.levelWand} src={currentQuestion.questionLevel} alt="Question Level" />
      </div>
      <div className={style.quizQuestion}>
        < AllText regularText={`${question.questionText}`} />
      </div >
    </div>
  );
};
