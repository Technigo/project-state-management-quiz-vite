
import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import { Summary } from "./Summary";
import { FeedbackPage } from "./FeedbackPage";
import { WelcomePage } from "./WelcomePage";
import { Question } from "./Question";







export const Quize = () => {
  const questions = useQuizStore((state) => state.questions);
  const quizOver = useQuizStore((state) => state.quizOver);
  const answers = useQuizStore((state) => state.answers);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const question = currentQuestionIndex != null ? questions[currentQuestionIndex] : null;
  const currentQuestionAnswer = currentQuestionIndex != null ? answers.find((a) => a.questionId === question.id) : null;



  return (
    <div className="managed-component">
      {(currentQuestionIndex != null && !currentQuestionAnswer && !quizOver) && <Question />}
      {(currentQuestionIndex != null && !!currentQuestionAnswer && !quizOver) && <FeedbackPage />}
      {currentQuestionIndex === null && <WelcomePage />}
      {quizOver && <Summary />}
    </div>
  );
};
