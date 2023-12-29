import useQuizStore from "../../stores/useQuizStore";
import { SWText } from "../../components/BitsAndBobs/SWText";
import style from "../Quiz/AnswersandQuestionsStyle.module.css";

export const Answers = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.correctAnswerIndex;
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[currentQuestionIndex]?.answerIndex
  );
  const isAnswerCorrect = useQuizStore(
    (state) => state.answers[currentQuestionIndex]?.isCorrect
  );

  const handleOptionClick = (index) => {
    if (selectedAnswerIndex !== undefined) return;
    useQuizStore.getState().submitAnswer(currentQuestion.id, index);
  };

  if (!currentQuestion) {
    return <SWText regularText="This isn't the question we're looking for.." />;
  }

  return (
    <>
      <div className={style.Answers}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleOptionClick(index)}
            className={`${style.optionButton} ${
              selectedAnswerIndex === index
                ? isAnswerCorrect
                  ? style.correct
                  : `${style.incorrect} ${style.shake}`
                : index === correctAnswerIndex &&
                  selectedAnswerIndex !== undefined
                ? style.correct
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
