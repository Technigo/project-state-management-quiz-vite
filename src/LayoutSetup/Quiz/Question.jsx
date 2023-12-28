import useQuizStore from "../../stores/useQuizStore";
import style from "./AnswersandQuestionsStyle.css";
import { SWText } from "../../components/BitsAndBobs/SWText";

export const Question = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div className={style.levelContainer}>
        <SWText regularText="Level:" />
        <img
          className={style.levelWand}
          src={currentQuestion.questionLevel}
          alt="Question Level"
        />
      </div>
      <div className={style.quizQuestion}>
        <SWText
          regularText={`${question.questionText}`}
          textClassName={style.questions}
        />
      </div>
    </div>
  );
};
