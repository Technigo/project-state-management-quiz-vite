import useQuizStore from "../../stores/useQuizStore";
import style from "./NextQButton.module.css";

export const NextButton = () => {
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]?.answerIndex
  );
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const totalQuestions = useQuizStore((state) => state.questions.length);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isAnswerSelected = selectedAnswerIndex !== undefined;

  return (
    <div>
      <button
        onClick={goToNextQuestion}
        disabled={selectedAnswerIndex === undefined}
        className={style.nextButton}
      >
        {isLastQuestion && isAnswerSelected
          ? "Results, to!"
          : "Stay on target!"}
      </button>
    </div>
  );
};
