import useQuizStore from "../../stores/useQuizStore";
import style from "../Quiz/AnswersandQuestionsStyle.css";

export const Quizuestion = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const currentQuestion = questions[currentQuestionIndex];
};

// return (
//     <div>
//       <div className={style.levelContainer}>
//         <AllText regularText="Task Level:" />
//         <img className={style.levelWand} src={currentQuestion.questionLevel} alt="Question Level" />
//       </div>
//       <div className={style.quizQuestion}>
//         < AllText regularText={`${question.questionText}`} textClassName={style.questions} />
//       </div >
//     </div>
//   );
// };
